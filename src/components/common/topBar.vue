<template>
  <header>
      <div class="header-fixed">
        <van-icon name="arrow-left" @click="goBack"/>
        <span class="f17 c-087 title">{{title}}</span>
        <i class="icon"><img :src="icon" v-if="icon"></i>
        <span class="f14 r_ed tit_t">{{tit_text}}</span> 
      </div> 
  </header>
</template>
<script>
   export default{
       data(){
           return{
            //   hideList: ['index'] //隐藏后退按钮的页面
           }
       },
       computed:{
           title(){
               return this.$parent.title
           },
           tit_text(){
               return this.$parent.tit_text
           },
           icon(){
               return this.$parent.icon
           }
       },
       methods:{
            goBack(){
              this.$router.back()
            },
       },
       watch:{
          '$route':function(newValue){
          }  
       }
   }
</script>
<style scoped>
   header{
       height:0.44rem;
      
       /* border-bottom:1px solid #E6E6E6; */
   }
   .header-fixed{
       width:3.75rem;
       height:0.44rem;
       position:fixed;
      background:#ffffff; 
      z-index:100;
   }
   /deep/ .van-icon{
      color:#666666;
      font-size:0.2rem;
      margin-left:0.1rem;
      position:absolute;
      top:0.12rem;
   }
   .title{
       position:absolute;
       top:0.1rem;
       left:1.63rem;
   }
   .tit_t{
       position:absolute;
       top:0.12rem;
       right:0.12rem;
   }
   .icon img{
       width:0.24rem;
       height:0.24rem;
       position:absolute;
       top:0.09rem;
       right:0.44rem;
   }
</style>