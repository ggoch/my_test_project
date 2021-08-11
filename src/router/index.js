import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Totel from '../views/homePage/totel.vue'
import Game from '../views/homePage/game.vue'
import Boutique from '../views/homePage/boutique.vue'
import Book from '../views/homePage/book.vue'

import ProductNew from '../views/productNew.vue'

import Product from '../views/product.vue'

import ProductPage from '../views/productPage.vue'

import SupplierAllBack from '../views/supplierAllBack.vue'

import Login from '../views/login.vue'

import MemeberInfo from '../views/memberInfo.vue'
import Update from '../views/memberPage/update.vue'
import Shopping from '../views/memberPage/shopping.vue'
import Complete from '../views/memberPage/complete.vue'

import SignUp from '../views/signUp.vue'
import SignUpResult from '../views/signupResult.vue'

import TestPage from '../views/testPage.vue'

import {store} from '../store.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:Home,
    beforeEnter:(to,from,next) => {
      next();
    },
    children:[
      {
        path:'',
        name:Totel,
        component:Totel
      },
      {
        path:'game',
        name:Game,
        component:Game
      },
      {
        path:'boutique',
        name:Boutique,
        component:Boutique
      },
      {
        path:'book',
        name:Book,
        component:Book
      }
    ]
  },
  {
    path:'/login',
    name:Login,
    component:Login
  },
  {
    path:'/member_info',
    name:MemeberInfo,
    component:MemeberInfo,
    beforeEnter:(to,from,next) => {
      if(store.status.loginStatus == "登入成功"){
        next();
      }else{
        alert("請重新登入");
        next('/');
      }
    },
    children:[
      {
        path:'',
        name:Shopping,
        component:Shopping
      },
      {
        path:'member_profile',
        name:Update,
        component:Update
      },
      {
        path:'complete_order',
        name:Complete,
        component:Complete
      }
    ]
  },
  {
    path:'/sign_up',
    name:SignUp,
    component:SignUp
  },
  {
    path:'/sign_up/signup_result',
    name:SignUpResult,
    component:SignUpResult
  },
  {
    path:'/product_new',
    name:ProductNew,
    component:ProductNew
  },
  {
    path:'/product',
    name:Product,
    component:Product
  },
  {
    path:'/product_page',
    name:ProductPage,
    component:ProductPage,
    beforeEnter: (to, from,next) => {
      let bodySrcollTop = document.body.scrollTop
      if (bodySrcollTop !== 0) {
        document.body.scrollTop = 0
        return
      }
      let docSrcollTop = document.documentElement.scrollTop
      if (docSrcollTop !== 0) {
        document.documentElement.scrollTop = 0
      }
      next();
    }
  },
  {
    path:'/supplierAllBack',
    name:SupplierAllBack,
    component:SupplierAllBack
  },
  {
    path:'/testPage',
    name:TestPage,
    component:TestPage
  },
  {
    path: '*',
    redirect: '/',
  }
]

const router = new VueRouter({
  //mode: 'history',
  routes,
})

router.beforeEach(async (to,from,next) => {
  const isLogin = localStorage.getItem('token');
  if(isLogin !== null){
    await store.router.checkLogin();
    next();
  }else{
    next();
  }
})

/*router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  let docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})*/


export default router