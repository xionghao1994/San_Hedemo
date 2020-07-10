<template>
  <div>
   <van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
       <div class="top-shadow"></div>
       <div class="img">
           <img src="../../assets/img/pic_2.png" width="100%" height="100%">
       </div> 
       <span class="f12 r_ed pop-price">¥188.0</span>
       <p class="c-000 f14 pop-tit">段数</p>
       <div class="f16 specification">
           <ul>
               <li class="spec-num f16 r_ed">3段</li>
            </ul>
       </div>
       <p class="c-000 f14 pop-tit">规格</p>
       <div class="f16 specification">
          <li class="spec-num f16 r_ed">900克</li>
       </div>
       <div class="flex-between">
           <span class="c-000 f14">数量</span>
           <span><van-stepper v-model="value" /></span>
       </div>
       <div class="btn f18">立即购买</div>
   </van-popup>
  </div>
</template>
<script>
  export default{
      data(){
          return{
              show:false,
              vakue:''
          }
      },
      methods:{
          
      }
  }
</script>
<style scoped>
  .top-shadow{
      width:3.75rem;
      height:0.34rem;
      background-color: rgba(0,0,0,.7);
  }
   .img{
       width:0.95rem;
       height:0.95rem;
       margin-left:0.12rem;
       margin-top:-0.34rem;  
   }
   .pop-price{
      position:absolute;
      top:0.8rem;
      left:1.2rem;
   }
   .pop-tit{
       margin-top:0.08rem;
       margin-left:0.12rem;
   }
   .specification{
       margin-bottom:0.06rem;
   }
   .spec-num{
       width:0.83rem;
       height:0.32rem;
       border-radius:0.04rem;
       text-align:center;
       line-height:0.32rem;
       margin-top:0.14rem;
       margin-left:0.12rem;
       border:1px solid rgba(255,28,52,1);
   }
   .flex-between{
       display:flex;
       justify-content:space-between;
       height:0.48rem;
       padding:0 0.12rem;
       align-items:center;
       margin-top:0.08rem;
   }
   .btn{
       width:3.75rem;
       height:0.49rem;
       background:rgba(255,28,52,1);
       text-align:center;
       line-height:0.49rem;
       color:#ffffff;
       position:fixed;
       bottom:0;
   }
</style>