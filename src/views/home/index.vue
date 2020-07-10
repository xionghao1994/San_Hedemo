<template>
  <div>
      <div class="head-main">
         <div class="head-top">
             <span class="f14">乐富海邦园店…</span>
             <span><img src="~/assets/img/ic_message.png"></span>
         </div>
         <div class="head-search"  @click="next('search')">
            <i class="head-icon"></i>
            <input type="text" placeholder="请输入搜索关键词"> 
         </div>
         <div class="head-banner">
             <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(i, index) in images" :key="index">
                    <img v-lazy="i.img" />
                </van-swipe-item>
              </van-swipe>
         </div>
      </div>
      <div class="nav-list">
          <ul>
            <li v-for="(item,index) in project" :key="index">
                <img :src="item.subjects.img">
                <span class="f12">{{item.subjects.title}}</span>
            </li>
          </ul>
      </div>
      <div class="notice">
            <img src="~/assets/img/img_tt.png">
            <p class="f12">会员活动全新升级！快来领奖吧</p>
      </div>
      <div class="content">
        <div class="content-left" @click="next('purchase')">
         <div class="content-pra-top">
            <img src="~/assets/img/img_xsms.png">
            <li class="f12">
              <span>08</span>:<span>32</span>:<span>24</span>
            </li>
         </div>
         <div class="content-pra-bottom">
             <div>
                <img src="../../assets/img/pic_10.png">
             </div>
             <div>
                 <img src="../../assets/img/pic_7.png">
             </div>
         </div>
        </div>
        <div class="content-right">
         <div class="content-pra-top">
           <img src="~/assets/img/img_ptq.png">
         </div>
         <div class="content-pra-bottom">
             <div>
                <img src="~/assets/img/pic_10.png">
             </div>
             <div>
                 <img src="~/assets/img/pic_7.png">
             </div>
         </div>
        </div>
        <div class="content-bottom">
            <div class="content-bottom-label">
              <span><img src="~/assets/img/img_tjrm.png"></span>
              <span class="f12 c-000">查看更多</span>
            </div>
            <div class="content-bottom-best">
                <li>
                    <img src="../../assets/img/pic_4.png">
                    <p class="f12 content-p">爱他美奶粉黄金1段</p>
                    <p><span class="f12 r_ed">¥145.00</span><span class="f10 c-999 text-right">¥216.00</span></p>
                </li>
                 <li>
                    <img src="../../assets/img/pic_3.png">
                    <p class="f12 content-p">爱他美奶粉黄金1段</p>
                    <p><span class="f12 r_ed">¥145.00</span><span class="f10 c-999 text-right">¥216.00</span></p>
                </li>
                 <li>
                    <img src="../../assets/img/pic_9.png">
                    <p class="f12 content-p">爱他美奶粉黄金1段</p>
                    <p><span class="f12 r_ed">¥145.00</span><span class="f10 c-999 text-right">¥216.00</span></p>
                </li>
            </div>
        </div>
      </div>
      <div class="slogan"><img :src="Advert_Img" width="100%" height="100%"></div>
      <div class="prod-list">
         <productList :data="productList"></productList>
      </div>
      <div class="slogan"><img :src="Advert_Img" width="100%" height="100%"></div>
      <div class="prod-list">
         <productList :data="productList"></productList>
      </div>
      <div class="more-list">
          <div class="more-tag">
             <img src="~/assets/img/img_wntj.png" width="100%" height="100%"> 
          </div>
          <ul>
              <li v-for="(i,index) in scroll_List" :key="index">
                  <div class="thumd"><img :src="i.base_pic" width="100%" height="100%"></div>
                  <p class="f13 c-087">{{i.item_name}}</p>
                  <p class="f12 r_ed">{{i.price}}</p>
              </li>
          </ul>
      </div>
     <Scroll @loadMore="loadMore" :noMore="noMore" />
  </div>
</template>
<script>
 import axios from 'axios';
 import { BaseUrl } from '../utils/api'
export default {
    data(){
        return{
            noMore: false,
            images: [],
            project:[],
            productList:[{
                detail:'花王（Merries）纸尿裤 S82片…',
                price:'¥145.00',
                image:require('../../assets/img/pic_9.png')
            },{
                detail:'花王（Merries）纸尿裤 S82片…',
                price:'¥145.00',
                image:require('../../assets/img/pic_8.png')
            },
            {
                detail:'花王（Merries）纸尿裤 S82片…',
                price:'¥145.00',
                image:require('../../assets/img/pic_7.png')
            },{
                detail:'花王（Merries）纸尿裤 S82片…',
                price:'¥145.00',
                image:require('../../assets/img/pic_9.png')
            }],
            base_Notice:{
                api_name:'V1.index.notice.notices',
                PHPSESSID:'if9qbp0rcnp0gdep84pr7e6878'
            },
            Advert_Img:'',
            scroll_List:[]

        }
    },
    created(){
        this.getBanner()
        this.getCommodity_Project()
        this.hotSell()
        this.getNotice()
        this.getAdvert()
        this.timeProd()
    },
    methods:{
        loadMore(){
        },
        next(url){
         this.$router.push({name:url})
        },
        getBanner(){
           BaseUrl({
            api_name:'V1.index.index.slider'
           }).then((res)=>{
               if(res.code =='0'){
                if(res.data.length>0){
                    this.images = res.data
                }
               }
           })
        },
        getCommodity_Project(){
             BaseUrl({
               api_name:'V1.index.Index.items'  
             }).then((res)=>{
                if(res.code =='0'){
                    if(res.data.length>0){
                        this.project = res.data
                    }
                }
             })
        },
        async getNotice(){
            let res =  await BaseUrl(this.base_Notice)
            // console.log(res)
        },
        getAdvert(){
           BaseUrl({
               api_name:'V1.index.Index.advice'
           }).then((res)=>{
              if(res.code =='0'){
                  let { img } = res.data;
                  this.Advert_Img = img;
              }
           })
        },
        hotSell(){//NO数据
           BaseUrl({
             api_name:'V1.index.Index.seconds'
           }).then((res)=>{
              
           }) 
        },
        timeProd(){//活动已结束
            BaseUrl({
               api_name:'V1.activity.activity.limitBuyItems',
               limit_buy_id:'5'
            }).then((res)=>{
                if(res.code =='0'){
                    // console.log(res)
                }
            })
        },
        Product_List(){
          BaseUrl({
              api_name:'V1.decoration.AdminItem.getItemList'
          }).then((res)=>{
             if(res.code =='0'){
                 if(res.data.list.length>0){
                     this.scroll_List = res.data.list
                 }
             }
          })   
        }
    },
    components:{
        productList:()=>import('components/common/productScroll'),
        Scroll:()=>import('components/common/scroll')
    },
    mounted(){
        this.Product_List()
    }

}
</script>
<style scoped>
  .head-main{
    width:3.75rem;
    height:1.9rem;
    margin-bottom:0.9rem;
    background:rgba(255,33,55,1);
  }
  .head-top{
    height:0.45rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#FFFFFF;
    padding-left:0.16rem;
    padding-right:0.1rem;
  }
  .head-top span + span{
      width:0.24rem;
      height:0.25rem;
  }
  .head-search{
      width:3.45rem;
      height:0.32rem;
      background:rgba(255,255,255,1);
      border-radius:0.16rem;
      margin-top:0.04rem;
      margin-left:0.14rem;
      display:flex;
      align-items:center;
  }
  .head-search input{
      width:85%;
      height:100%;
      font-size:0.14rem;
      border-radius:0.16rem;
      text-indent:0.04rem;
      display:inline-block;
      color:rgba(0,0,0,0.38);
  }
  ::-webkit-input-placeholder{
      color:rgba(0,0,0,0.38);
  }
   .head-icon{
      width:0.25rem;
      height:0.25rem;
      background:url('../../assets/img/ic_search.png') no-repeat;
      background-size:100% 100%;
      display: inline-block;
      margin-left:0.08rem;
  }
  .head-banner{
      width:3.51rem;
      height:1.76rem;
      border-radius:0.08rem;
      margin:0.16rem 0.12rem 0.02rem;
  }
  /deep/ .van-swipe img{
      width:100%;
      height:1.76rem;
  }
  .nav-list ul{
    width:100%;
  }
   .nav-list li{
    text-align:center;
    color:rgba(0,0,0,0.54);
    display: inline-block;
    margin-top:0.08rem;
    margin-left:0.13rem;
    margin-right:0.13rem; 
   }
  .nav-list li img{
      /* width:0.4rem; */
      height:0.4rem;
      margin-bottom:0.05rem;
      margin-left:0.04rem;
  }
  .notice{
    width:3.51rem;
    height:0.4rem;
    color:#000000;
    background:rgba(249,249,249,1);
    border-radius:0.2rem;
    background:rgba(249,249,249,1);
    margin:0.19rem 0.12rem 0;
    display:flex;
    align-items:center;
  }
  .notice img{
      width:0.64rem;
      height:0.17rem;
      margin-left:0.12rem;
      margin-right:0.12rem;
  }
  .content{
      width:3.51rem;
      height:3.25rem;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 16px 0px rgba(0,0,0,0.08);
      background:#F2F2F2;
      border-radius:0.16rem;
      margin:0.2rem 0.12rem;
      font-size:0px;
  }
  .content>div{
    display:inline-block;
    overflow: hidden;
  }
  .content-left{
      width:1.73rem;
      height:1.2rem;
      background:#ffffff;
      border-top-left-radius:0.16rem;
      margin-right:0.02rem; 
  }
  .content-right{
      width:1.75rem;
      height:1.2rem;
      background:#ffffff;
      border-top-right-radius:0.16rem;  
  }
  .content-bottom{
      width:3.51rem;
      height:2.05rem;
      margin-top:0.03rem;
  }
  .content-pra-top{
      height:0.44rem;
      display:flex;
      align-items:center;
  }
  .content-pra-top img{
      width:0.54rem;
      height:0.18rem;
      margin-left:0.14rem;
      margin-right:0.17rem;
  }
  .content-pra-top li{
      width:0.6rem;
      height:0.16rem;
  }
  .content-pra-top li span{
     width:0.16rem;
     height:0.16rem;
     background:rgba(0,0,0,0.87);
     border-radius:0.02rem;
     color:#ffffff;
     margin:0.04rem;
  }
  .content-pra-bottom{
      width:1.75rem;
      height:0.76rem;
      display:flex;
      justify-content:space-around;
  }
  .content-pra-bottom img{
     width:0.55rem;
     height:0.55rem; 
  }
  .content-bottom-label{
      height:0.44rem;
      background:#ffffff;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding-left:0.14rem;
      padding-right:0.12rem;
  }
  .content-bottom-label img{
      width:0.54rem;
      height:0.18rem;
  }
  .content-bottom-best{
      background:#ffffff;
      display:flex;
      width:auto;
      justify-content:space-between;
      flex-wrap:wrap;
  }
  .content-bottom-best img{
      width:0.8rem;
      height:0.8rem;
      margin-left:0.15rem;
      margin-right:0.14rem;
      margin-top:0.15rem;
      margin-bottom:0.14rem;
  }
  .content-bottom-best li{
     background:#ffffff;
  }
   .content-p{
      margin-top:0.04rem;
      margin-bottom:0.06rem;
  }
  .text-right{
      margin-left:0.06rem;
      text-decoration:line-through
  }
  .slogan{
    width:3.51rem;
    height:1.68rem;
    background:pink;
    margin:0 0.12rem;
  }
  .prod-list{
      width:3.51rem;
      height:1.83rem;
      background:rgba(255,255,255,1);
      margin:0 auto;
  }
  .more-list{
    width:3.53rem;
    margin:0 auto;
    background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(245,245,245,1) 100%);
  }
  .more-tag{
      width:1.65rem;
      height:0.16rem;
      margin:0.2rem auto;
  }
  .more-list ul li{
      width:1.7rem;
      display:inline-block;
      margin:0.02rem;
  }
  .more-list .thumd{
      width:1.5rem;
      height:1.5rem;
  }
</style>