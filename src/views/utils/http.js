/**
 * Created by xh on 19/12/09
 */

 import axios from 'axios'
 import Mint from 'mint-ui';
 import Vue from 'vue';
 Vue.use(Mint);

 const http = axios.create({
     headers:{
         'Content-Type': 'application/json',
     }   
 });  

 http.interceptors.request.use(function (config) {
  config.withCredentials =true
  // config.headers.Authorization = ``
  Mint.Indicator.open({
    text: '加载中...',
    // spinnerType: 'triple-bounce'
  });
  return config;
}, function (err) {
  return Promise.reject(err);
}
);
http.interceptors.response.use(function (response) {
  Mint.Indicator.close();//关闭loading
  return response;
}, function (err) {
  return Promise.reject(err);
})
 
 /**
  * 封装图形验证码
  * @param {*} url 
  */
 export function GetauthImage(url){
    return new Promise((resolve, reject) =>{
        http({
            method:'get',
            url,
            responseType: 'arraybuffer',
        }).then(res => {
            return 'data:image/png;base64,' + btoa(
               new Uint8Array(res.data)
                 .reduce((data, byte) => data + String.fromCharCode(byte), '')
             ) 
          }).then(data =>{
             resolve(data)
          }).catch(err => {
             reject(err)
        })
    })
 }
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        http.get(url, {
                params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装其他类型的请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, data = {}) {
    
    return new Promise((resolve, reject) => {
        let formData = new FormData();
        for (let key in data) {
            if (data[key]) {
              formData.append(key, data[key]);
            }
          }
        http.post(
            url,
            formData
        ).then(res => {
            resolve(res.data);
        }, err => {
            reject(err)
        })
    })
}