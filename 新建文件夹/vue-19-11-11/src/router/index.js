import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footer from '@/components/footer'
import homelist from '@/components/homelist'
// import detaillist from '@/components/detaillist' // 分类列表组件
import vivenull from '@/page/vivenull' // 进来显示默认页面
import home from '@/page/home'
import Featured from '@/page/Featured'
import find from '@/page/find'
import userCenter from '@/page/userCenter'
import search from '@/page/search' // 搜索
import classdetail from '@/page/classdetail' // vip分类详情页 
import tabdetail from '@/page/tabdetail' // VIP标签详情页 
import AVlist from '@/page/AVlist' // 人气分类列表 
import hot from '@/page/hot' // 最新最热 

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'vivenull',
        component: vivenull,
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        /*children: [
            {
                path: 'classdetail',
                name:'classdetail',
                component: classdetail
            },
            {
                path: 'tabdetail',
                name:'tabdetail',
                component: tabdetail
            }
        ]*/
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
    },
    {
        path: '/search/:id',
        name: 'search',
        component: search,
    },
    {
        path: '/classdetail',
        name: 'classdetail',
        component: classdetail
    },
    {
        path: '/tabdetail',
        name: 'tabdetail',
        component: tabdetail
    },
    {
        path: '/AVlist',
        name: 'AVlist',
        component: AVlist
    },
    {
        path: '/hot',
        name: 'hot',
        component: hot
    },
  ]
})
