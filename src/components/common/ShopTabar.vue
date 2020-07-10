<template>
   <footer>
       <div class="icon1"><span class="kefu"></span><p class="f12 c-000">客服</p></div>
       <div><span class="gouwuche"></span><p class="f12 c-000">购物车</p></div>
       <div class="gou-mai f14">立即购买</div>
   </footer>
</template>
<style scoped>
   footer{
       width:3.75rem;
       height:0.48rem;
       background:rgba(255,255,255,1);
       position:fixed;
       bottom:0;
       left:0;
       display:flex;
       align-items:center;
       padding-top:0.02rem;
   }
    footer>div{
        display: inline-block;
    }
   .kefu{
       width:0.24rem;
       height:0.24rem;
       background:url('../../assets/img/ic_kefu.png') no-repeat;
       background-size:100%;
       display: inline-block;
   }
   .gouwuche{
       width:0.24rem;
       height:0.24rem;
       background:url('../../assets/img/ic_gouwuche.png') no-repeat;
       background-size:100%;
       display: inline-block;
   }
   .gou-mai{
        width:2.54rem;
        height:0.4rem;
        background:rgba(255,28,52,1);
        border-radius:0.2rem;
        text-align:center;
        line-height:0.4rem;
        color:#ffffff;
        margin-left:0.13rem;
   }
   .icon1{
       margin-left:0.12rem;
       margin-right:0.12rem;
   }
</style>