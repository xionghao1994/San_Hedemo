<template>
   <div class="container" v-if="detail">
        <topBar ref="head"></topBar>
        <div class="banner">
            <img :src="detail.base_pic" width="100%" height="100%">
        </div>
        <div class="active-time">
            <p class="f14">限时购活动剩余</p>
            <van-count-down :time="time">
                <template v-slot="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
            <span class="f14 both">查看全部</span>
            <i class="icon-arrow"></i>
        </div>
        <div class="Prod-title">
            <div class="tit-l">￼￼
                <span class="f14">{{detail.item_name}}</span>
                <p class="f12 c-000">{{detail.item_desc || '暂无'}}</p>
            </div>
            <div class="tit-r" v-if="detail.is_collect == '0'"><van-icon name="like-o" /><p class="c-666 f11">收藏</p></div>
            <div class="tit-r" v-else><van-icon name="like" color="#FF1C34" /><p class="c-666 f11">收藏</p></div>
        </div>
        <div class="flex-pirce">
            <span class="f13 r_ed">¥{{detail.price}} &nbsp;<span id="c-054" class="c-del f10">¥{{detail.cost_price}}</span></span>
            <span class="f12 c-000">销量 {{detail.sales_num}}件</span>
        </div>
        <div class="choose-amout">
            <div class="f14 c-999">已选 <span id="c-87" class="f13">900克，3段</span></div>
            <div @click="sku"><img src="~/assets/img/ic_more.png"></div>
        </div>
       <div class="server-det">
           <div class="f14 desc"><span class="c-999">服务</span><span class="c-333 f13">·30天退换货·48小时快速退款·满88包邮·国际直邮</span></div>
           <div><img src="~/assets/img/ic_more.png"></div>
       </div>
       <div class="eval-list">
           <div class="pro-evaluate">
               <span class="c-130 f14">商品评价(233)</span>
               <span class="c-666 f12">查看全部 <van-icon name="arrow" /></span>
           </div>
           <div class="messgae-list">
               <ul>
                   <li>
                     <div class="head"><img src="../../assets/img/img_xsms.png"><span class="f13 c-130">辛迪北贝</span></div>
                     <p class="f13 c-333">东西收到了，快递很给力，我觉得ok，下次再来</p>
                     <ul class="img">
                      <li><img src="../../assets/img/pic_5.png"></li>
                      <li><img src="../../assets/img/pic_5.png"></li>
                      <li><img src="../../assets/img/pic_5.png"></li>
                     </ul>
                   </li>
               </ul>
             
               
           </div>

       </div>
       <div class="more-goods">
           <div><img src="../../assets/img/pic_7.png"></div>
           <span class="c-333 tit1 f14">莱顿门窗</span>
           <span class="c-666 tit2 f13">低价享旗舰商品</span>
           <span class="r_ed tit3 f14">查看更多商品 </span><van-icon name="arrow" />
       </div>
       <div class="content-det">
        <div class="tit"><img src="~/assets/img/img_wntj1.png" width="100%" height="100%"></div>
        <productList :data="productList"></productList>
        <div class="banner-img">

        </div>
       </div>
      <ShopTabar></ShopTabar>
      <SkuPop ref="pop"></SkuPop>
   </div>
</template>
<script>
 import topBar from 'components/common/topBar';
 import productList from 'components/common/productScroll'
 import ShopTabar from 'components/common/ShopTabar'
 import { BaseUrl } from '../utils/api'
   export default{
       data(){
           return{
               tit_text:'分享',
               icon:require('../../assets/img/icon-shareredpacke.png'),
               detail:{},
               time: 30 * 60 * 60 * 1000,
               timeData: {},
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
           }
       },
       created(){
          this.getProd_Detail()
       },
       methods:{
          onChange(e) {
            this.setData({
            timeData: e.detail,
          });
         },
         sku(){
            this.$refs.pop.show=true; 
         },
         getProd_Detail(){
             BaseUrl({
               api_name:'V1.item.item.itemInfo',
               item_id:'720834'
             }).then((res)=>{
                 if(res.code =='0'){
                    this.detail = res.data;
                    console.log(res.data)
                 }
             })
         }
       },
       mounted(){
       },
       components:{
         topBar,
         productList,
         ShopTabar,
         SkuPop:()=>import('../../components/common/SkuPop'),
         CountDown: () => import('../../components/common/CountDown'),
       }
   }
</script>
<style scoped>
   .container{
       width:3.75rem;
       background:rgba(245,245,245,1);
   }
   .banner{
       width:3.06rem;
       height:3.1rem;
       margin:0 auto;
       background:#ffffff;
   }
   .banner img{
       outline:none;
       border:0;
   }
   .active-time{
       width:3.75rem;
       height:0.56rem;
       background:rgba(255,28,52,1);
       margin-top:0.05rem;
       position: relative;
       overflow: hidden;
   }
   .active-time P{
       margin-top:0.06rem;
       margin-left:0.12rem;
       color:#ffffff;
   }
   .active-time .colon {
    display: inline-block;
    margin: 0 4px;
    color: #ffffff;
  }
  .active-time .block {
    display: inline-block;
    width: 0.22rem;
    color: #FF6F00;
    font-size: 0.12rem;
    text-align: center;
    background-color:#ffffff;
    border-radius:0.04rem;
  }
  /deep/ .van-count-down{
      margin-left:0.12rem;
      margin-top:0.06rem;
  }
  .active-time .both{
      color:#ffffff;
      position:absolute;
      top:0.18rem;
      right:0.3rem;
  }
  .active-time .icon-arrow{
      width:0.24rem;
      height:0.24rem;
      background:url('../../assets/img/icon_rightarrowwhite.png') no-repeat;
      background-size:100%;
      display: inline-block;
      position:absolute;
      top:0.16rem;
      right:0.04rem;
  }
  .Prod-title{
      display:flex;
      background:#ffffff;
  }
  .Prod-title .tit-l{
      width:2.92rem;
      padding-left:0.12rem;
      padding-top:0.12rem;
  }
   .Prod-title .tit-l p{
      margin-bottom:0.04rem;
   }
 
  .Prod-title .tit-r{
     flex:1;
     text-align:right;
     padding-right:0.13rem;
  }
  .Prod-title .tit-r /deep/ .van-icon{
     font-size:20px;
     margin-top:0.13rem;
  }
  .flex-pirce{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:0.12rem;
      background:#ffffff;
  }
  .flex-pirce sub{
      margin-left:0.04rem;  
  }
  .choose-amout{
      display:flex;
      justify-content:space-between;
      height:0.48rem;
      background:rgba(255,255,255,1);
      padding:0 0.12rem;
      margin-top:0.09rem;
      display:flex;
      align-items:center;
      border-bottom:1px solid #EBEBEB;
  }
  .choose-amout img,
  .server-det img{
      width:0.16rem;
      height:0.16rem;
  }
  .server-det{
      height:0.72rem;
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:0 0.12rem;
      background:#ffffff;
  }
  .server-det p{
      display:inline-block;
  }
   .server-det span + span{
       width:2.32rem;
       height:0.4rem;
       flex:1;
   }
  .server-det .desc{
      width:2.57rem;
      display: flex;
  }
  .eval-list{
      margin-top:0.09rem;
      background:#ffffff;
  }
  .pro-evaluate{
      display:flex;
      justify-content:space-between;
      padding:0.12rem;
      align-items:center;
  }
  .pro-evaluate span + span{
      display:flex;
      align-items:center;
  }
  .head{
      display:flex;
      align-items:center;
  }
  .head img{
      width:0.3rem;
      height:0.3rem;
      border-radius:50%;
      margin-left:0.12rem; 
  }
  .head span{
    margin-left:0.05rem;
  }
  .messgae-list .img{
    display:flex;
    margin-top:0.1rem;
    margin-left:0.12rem;
    padding-bottom:0.15rem;
  }
  .messgae-list .img li{
      width:0.6rem;
      height:0.6rem;
      margin-right:0.12rem;
  }
   .messgae-list p{
       margin-left:0.12rem;
       margin-top:0.02rem;
   }
   .more-goods{
       width:3.75rem;
       height:0.74rem;
       background:#ffffff;
       margin-top:0.09rem;
       position: relative;
   }
   .more-goods img{
       width:0.5rem;
       height:0.5rem;
       position: absolute;
       top:0.12rem;
       left:0.12rem;
   }
   .more-goods .tit1{
       position:absolute;
       top:0.15rem;
       left:0.77rem;
   }
   .more-goods .tit2{
       position:absolute;
       top:0.4rem;
       left:0.77rem;
   }
   .more-goods .tit3{
       position:absolute;
       top:0.27rem;
       right:0.24rem;
   }
    .more-goods /deep/ .van-icon{
        position:absolute;
        top:0.29rem;
        right:0.08rem;
        color:#666666;
    }
    .content-det{
        margin-top:0.09rem;
        background:#ffffff;
        padding-top:0.19rem;
    }
    .content-det .tit{
        width:1rem;
        height:0.16rem;
        margin-left:1.38rem;
    }
    .banner-img{
        width:3.75rem;
        height:1rem;
        background:pink;
    }
   
   
</style>