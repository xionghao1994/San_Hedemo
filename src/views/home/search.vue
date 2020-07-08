<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" @click="$router.back()"/>
      <div class="head-search">
              <i class="head-icon"></i>
              <input type="text" placeholder="请输入搜索关键词"> 
          </div>
      </div>
      <div class="search-record" v-if="status>0">
        <p class="f14 c-333">热门搜索</p>
        <ul>
          <li class="c-000" v-for="(item,index) in hotSearch" :key="index">{{item}}</li>
        </ul>
        <div class="history-flex" id="search">
          <span class="f14 c-333">历史搜索</span>
          <span><img src="~/assets/img/icon-searchtrash.png"></span>
        </div>
        <ul>
          <li class="c-000" v-for="(item,index) in historySearch" :key="index">{{item}}</li>
        </ul>
      </div>
      <van-tabs animated line-width="22px" line-height="2px">
        <van-tab title="综合">
          <div class="prod-list">
            <ul class="list">
              <li v-for="(item,index) in scroll_List" :key="index">
                  <div class="thumd"><img :src="item.image" width="100%" height="100%"></div>
                  <p class="f14 c-087">{{item.detail}}</p>
                  <p class="f12 r_ed">{{item.price}}</p>
              </li>
             </ul>
          </div>
        </van-tab>
        <van-tab title="销量">内容 2</van-tab>
        <van-tab title="价格">内容 3</van-tab>
      </van-tabs>
  </div>
</template>
<script>
  export default{
      data(){
          return{
           status:'',
           hotSearch:['早餐','电子烟','营养品','玩具','辅食'],
           historySearch:['baby','小嗨妞','绝世好男','九尾狐','醉在你怀里','汪汪汪','蓉蓉么'],
           scroll_List:[{
                image:require('../../assets/img/good1.png'),
                detail:'￼￼美国爱他美幼儿配方奶粉3段(12-36月龄…',
                price:'￥188.0'

            },{
                image:require('../../assets/img/good2.png'),
                detail:'￼￼美国爱他美幼儿配方奶粉3段(12-36月龄…',
                price:'￥188.0'

            },{
                image:require('../../assets/img/good3.png'),
                detail:'￼￼美国爱他美幼儿配方奶粉3段(12-36月龄…',
                price:'￥188.0'

            },{
                image:require('../../assets/img/good1.png'),
                detail:'￼￼美国爱他美幼儿配方奶粉3段(12-36月龄…',
                price:'￥188.0'

            }]
          }
      },
      components:{
        
      }
  }
</script>
<style scoped>
 .header{
   width:3.75rem;
   height:0.44rem;
   display:flex;
   align-items:center;
   border-bottom:1px solid #E6E6E6;
 }
 /deep/ .van-icon{
   color:#666666;
   display: inline-block;
   font-size:0.2rem;
   margin-left:0.1rem;
 }
 .head-search{
      width:2.87rem;
      height:0.32rem;
      border-radius:0.16rem;
      background:#F7F7F7;
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
      color:#333333;
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
  .search-record p{
    margin-top:0.1rem;
    margin-left:0.12rem;
  }
  .search-record li{
    padding:0.01rem 0.12rem;
    height:0.24rem;
    text-align:center;
    line-height:0.27rem;
    background:rgba(246,246,246,1);
    border-radius:0.04rem;
    margin:0.11rem 0.1rem 0 0.12rem;
    display: inline-block;
  }
  .history-flex{
    display:flex;
    justify-content:space-between;
    margin:0 0.12rem;
  }
  .history-flex img{
    width:0.2rem;
    height:0.2rem;
  }
  #search{
    margin-top:0.3rem;
  }
  .prod-list{
    margin-left:0.12rem;
  }
  .list li{
      width:1.7rem;
      display:inline-block;
      margin:0.02rem;
  }
  .list .thumd{
      width:1.7rem;
      height:1.7rem;
  }
</style>