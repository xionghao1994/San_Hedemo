<template>
  <div>
       <ul>
            <li v-for="(item,index) in data" :key="index">
                <div><img :src="item.image" width="100%" height="100%"></div>
                <p class="f12 c-087">{{item.detail}}</p>
                <p class="r_ed f14">{{item.price}}</p>
            </li>
        </ul>
  </div>
</template>
<script>
   export default{
      props:{
          data:{
              type:Array,
              default:[]
          }
      },
       data(){
           return{
               
           }
       },
   }
</script>
<style scoped>
   ul{
    width:100%;
    overflow-x:auto;
    display:flex;
  }
   ul li{
      width:0.98rem;
      margin:0.12rem 0 0 0.12rem;
      display:inline-block;
  }
  ul li>div{
      width:0.98rem;
      height:0.98rem;
      margin-bottom:0.04rem;
  }
  ul li p + p{
      margin-top:0.04rem;
  }
  ::-webkit-scrollbar{
    display:none
  }
</style>