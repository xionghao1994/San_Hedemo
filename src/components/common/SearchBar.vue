<template>
  <div>
       <div class="head-search">
            <i class="head-icon"></i>
            <input type="text" placeholder="请输入搜索关键词"> 
         </div>
  </div>
</template>
<script>
   export default{
       data(){
           return{
               
           }
       }
   }
</script>
<style scoped>
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
</style>