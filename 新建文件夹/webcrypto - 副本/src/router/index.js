import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import Featured from '@/page/Featured'
import find from '@/page/find'
import userCenter from '@/page/userCenter'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Featured', // 精选
      name: 'Featured',
      component: Featured
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    }
  ]
})
