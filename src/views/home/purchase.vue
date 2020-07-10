<template>
  <div>
    <topBar ref="head"></topBar>
    <div class="banner">
      <img v-if="Advert_Img !==''" :src="Advert_Img" width="100%" height="100%">
    </div>
    <div class="rush">
        <timeBuy :data="timeBuys"></timeBuy>
    </div>
    <div class="prod-list">
      <ul>
        <li v-for="(i,index) in GoodList" :key="index">
          <div class="list-l">
            <img :src="i.image">
          </div>
          <div class="list-r">
            <div class="r-top f14 c-087">￼￼{{i.det}}</div>
            <p class="r-middle f12 c-000">{{i.time}} &nbsp;<span id="c-red">{{i.price}}</span>&nbsp;&nbsp;<span class="c-del">{{i.old}}</span></p>
            <div class="r-bottom">
              <div class="bottom-l r_ed f12">仅剩{{i.amount}}件</div>
              <div class="bottom-r f12" @click="rob">{{i.btn}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import topBar from 'components/common/topBar'
  import  timeBuy from 'components/common/timeBuy'
  import { BaseUrl } from '../utils/api'
   export default{
       data(){
           return{
              title:'限时购',
              Advert_Img:'',
              timeBuys:[{
                  time:'10:00',
                  status:'已开始'
              },{
                  time:'11:00',
                  status:'已开始'
              },{
                  time:'14:00',
                  status:'已开始'
              },{
                  time:'18:00',
                  status:'已开始'
              },{
                  time:'20:00',
                  status:'已开始'
              }],
              GoodList:[{
                image:require('../../assets/img/good3.png'),
                det:'美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）900克…',
                time:'限时价',
                price:'¥188.0',
                old:'¥299',
                amount:'120',
                btn:'马上抢'
              },{
                image:require('../../assets/img/good3.png'),
                det:'美素佳儿（Friso）金装幼儿配方奶粉 3段（1-3岁幼儿适用）900克…',
                time:'限时价',
                price:'¥188.0',
                old:'¥299',
                amount:'120',
                btn:'马上抢'
              }
              ]
           }
       },
       created(){
         this.getAdvert()
         this.getActiveList()
       },
       methods:{
          rob(){
            this.$router.push({name:'prodDetail'})
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
          getActiveList(){//活动已结束
            BaseUrl({
              api_name:'V1.activity.activity.limitBuyItems',
              limit_buy_id:'1'
            }).then((res)=>{
              // console.log(res)
            })
          }
       },
       components:{
         topBar,
         timeBuy
       }
   }
</script>
<style scoped>
   .banner{
     width:3.51rem;
     height:1.76rem;
     margin:0.08rem 0.12rem 0;
   }
   .rush{
     width:3.75rem;
     background:rgba(255,255,255,1);
     overflow-x: scroll; 
     white-space: nowrap;
     margin-top:0.1rem;
   }
   .prod-list{
     width:3.75rem;
     height:3rem;
     background:#FFFFFF;
   }
   .prod-list li{
     width:3.51rem;
     height:1.2rem;
     margin:0 auto;
     display:flex;
   }
    .prod-list li .list-l{
    }
    .prod-list li .list-l img{
      width:2rem;
      margin:0.14rem 0.1rem 0.14rem 0.1rem;
      width:0.8rem;
      height:0.92rem;
    }
    .prod-list li .list-r{
      flex:1;
    }
    .list-r .r-top{
      margin:0.12rem 0.12rem 0.04rem 0.03rem;
    }
    .list-r .r-middle{
      margin:0.02rem 0.12rem 0.08rem 0.03rem;
    }
    .r-bottom{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
    .r-bottom .bottom-l{
      padding:0 0.16rem;
      height:0.2rem;
      border-radius:2px;
      border:1px solid rgba(255,28,52,1);
      margin-left:0.03rem;
      display:flex;
      align-items:center;
    }
    .r-bottom .bottom-r{
      width:0.83rem;
      height:0.28rem;
      background:rgba(255,28,52,1);
      border-radius:14px;
      text-align:center;
      line-height:0.28rem;
      color:#ffffff;
      margin-right:0.12rem;
    }
    ::-webkit-scrollbar{
      display:none;
    }
</style>

