import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Mint from 'mint-ui';
import store from './store/store'
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import './assets/css/comm.css'
import axios from 'axios'

import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import 'swiper/css/swiper.css';

import animated from 'animate.css' 
Vue.use(animated)


// import Vconsole from 'vconsole'
// let vConsole = new Vconsole()
// Vue.use(vConsole)

import 'vant/lib/index.css';
import  vant  from 'vant';
Vue.use(vant)
//全局引用Toast
import { Toast } from "mint-ui";
Vue.prototype.$toast = Toast
import * as filters from './views/utils/filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.prototype.$axios = axios
// import lrz from "lrz";

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
// axios.defaults.retry = 2;
// axios.defaults.retryDelay = 5000;
// axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
//   var config = err.config;

//   if (!config || !config.retry) return Promise.reject(err);

//   config.__retryCount = config.__retryCount || 0;

//   if (config.__retryCount >= config.retry) {
 
//     return Promise.reject(err);
   
//   }

//   config.__retryCount += 1;
//   if (config.__retryCount >= 2) {
//     Mint.Indicator.close();
//     Mint.Toast({
//       message: '数据请求错误，请刷新页面稍后重试',
//       position: 'bottom',
//       duration: 2000
//     });
//   }

//   var backoff = new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve();
//     }, config.retryDelay || 1);
//   });
//   return backoff.then(function () {
//     return axios(config);
//   });
// });
// axios.interceptors.request.use(function (config) {
//   config.withCredentials =true
//   // config.headers.Authorization = ``
//   Mint.Indicator.open({
//     text: '加载中...',
//     spinnerType: 'triple-bounce'
//   });
//   return config;
// }, function (err) {
//   return Promise.reject(err);
// }
// );
// axios.interceptors.response.use(function (response) {
//   Mint.Indicator.close();//关闭loading
//   return response;
// }, function (err) {
//   return Promise.reject(err);
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
