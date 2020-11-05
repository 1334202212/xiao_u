import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home/'
    },
    {
      path:'/home',
      component:()=>import('../pages/Home/Home.vue'),
      children:[
        {
          path:'/home',
          redirect:'index',
        },
        {
          path:'index',
          component:()=>import('../pages/Home/Index.vue')
        },
        {
          path:'my',
          component:()=>import('../pages/Home/My.vue')
        },
        {
          path:'car',
          component:()=>import('../pages/Home/Shopcar.vue')
        },
      ]
    },
    {
      path:'/Category',
      component:()=>import('../pages/Category/Category.vue')
    },
    {
      path:'/details',
      component:()=>import('../pages/Details/Details.vue')
    },
    {
      path:'/Login',
      component:()=>import('../pages/Login/Login.vue')
    },
    {
      path:'/register',
      component:()=>import('../pages/Register/Register.vue')
    },
  ]
})
