import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Category.vue')
const Profile=()=>import('../views/profile/Profile.vue')
const Cart=()=>import('../views/cart/Cart.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  }
]

const router = new VueRouter({
  routes,
  model:'history'
  
})

export default router
