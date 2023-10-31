import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Search from '@/views/Search'
import SearchList from '@/views/SearchList'
import ProDetail from '@/views/ProDetail'
import Pay from '@/views/Pay'
import MyOrder from '@/views/MyOrder'

import Home from '@/views/Layout/Home'
import Category from '@/views/Layout/Category'
import Cart from '@/views/Layout/Cart'
import User from '@/views/Layout/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'category',
        component: Category
      },
      {
        path: 'cart',
        component: Cart
      },
      {
        path: 'user',
        component: User
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/searchlist',
    name: 'searchlist',
    component: SearchList
  },
  {
    path: '/prodetail/:id',
    name: 'prodetail',
    component: ProDetail
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: MyOrder
  }
]

const router = new VueRouter({
  routes
})

export default router
