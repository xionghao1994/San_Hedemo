<template>
  <div>
      <ul>
        <li v-for="(item,index) in data" :key="index" :class="{bgColor:index ==currentIndex}" @click="Active(index)">
            <!-- <i :class="{arrow:index==currentIndex}"></i> -->
            <p class="f14">今日{{item.time}}</p>
            <span class="f12">{{item.status}}</span>
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
            currentIndex:0,
          }
      },
      methods:{
          Active(index){
              this.currentIndex = index;
          }
      }
  }
</script>
<style scoped>
    ul{
     width:100%;
   }
    ul li{
      width:1.12rem;
      height:0.56rem;
      display: inline-block;
      text-align:center;
      margin-left:0.07rem;
      color:rgba(0,0,0,0.54);
   }
    li p{
       margin-top:0.1rem;
    }
    .bgColor{
        width:1.02rem;
        height:0.48rem;
        background:linear-gradient(180deg,rgba(255,168,0,1) 0%,rgba(255,111,0,1) 100%);
        border-radius:0.24rem;
        color:#ffffff;
    }
    .arrow{
       width: 0px;
       height: 0px;
       border-width: 6px 3px;
       border-color: red transparent transparent;
       border-style: solid;
       display: inline-block;
       position:absolute;
    }
</style>