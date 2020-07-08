import Vue from 'vue'
import Router from 'vue-router'
import about from './components/about.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',  
  // mode: 'history', 
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
   {
      path:'/index',
      name:'index',
      component:()=>import('./views/home/index.vue'),
      meta:{
        title:'首页'
      }
    },
   {
    path:'/about', name:'about', component: about,
    meta:{
      title:'关于我们'
    }
   },
   {
    path:'*',
    redirect:'/index',
    meta:{
      title:'首页'
    }
   }
    
  ]
})

