import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footer from '@/components/footer'
import homelist from '@/components/homelist'
import loader from '@/components/loader'
import titleHed from '@/components/titleHed' // 标题
// import detaillist from '@/components/detaillist' // 分类列表组件
import vivenull from '@/page/vivenull' // 进来显示默认页面   
import login from '@/page/login' // 登录   
import Aregister from '@/page/Aregister' // 注册   
import Apassword from '@/page/Apassword' // 修改密码   
import home from '@/page/home'
import Featured from '@/page/Featured'
import find from '@/page/find'
import welfare from '@/page/welfare' // 福利
import userCenter from '@/page/userCenter'
import search from '@/page/search' // 搜索
import classdetail from '@/page/classdetail' // vip分类详情页 1
import videodetail from '@/page/videodetail' // 视频详情 
import AVlist from '@/page/AVlist' // 人气分类列表 1
import hot from '@/page/hot' // 最新最热
import inviteFfriends from '@/page/inviteFfriends' // 邀请好友
import daliGuanli from '@/page/dali_guanli' // 代理结束
import dailiguanli from '@/page/dailiguanli' // 代理管理
import money from '@/page/money' // 充值会员
import helpwin from '@/page/helpwin' // 常见问题
import guankanjilu from '@/page/guankanjilu' // 观看记录
import Aiframe from '@/page/Aiframe' // 加载页面
import HtmlPanel from '@/components/HtmlPanel' //  未用 测试

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'vivenull',
        component: vivenull,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/Aregister',
        name: 'Aregister',
        component: Aregister,
    },
    {
        path: '/Apassword',
        name: 'Apassword',
        component: Apassword,
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
                path: 'videodetail',
                name:'videodetail',
                component: videodetail
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
        path: '/welfare',
        name: 'welfare',
        component: welfare
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
        path: '/videodetail/:id',
        name: 'videodetail',
        component: videodetail
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
    {
        path: '/inviteFfriends',
        name: 'inviteFfriends',
        component: inviteFfriends
    },
    {
        path: '/guankanjilu',
        name: 'guankanjilu',
        component: guankanjilu
    },
    {
        path: '/dali_guanli',
        name: 'daliGuanli',
        component: daliGuanli
    },
    {
        path: '/dailiguanli',
        name: 'dailiguanli',
        component: dailiguanli
    },
    {
        path: '/money',
        name: 'money',
        component: money
    },
    {
        path: '/helpwin',
        name: 'helpwin',
        component: helpwin
    },
    {
        path: '/Aiframe',
        name: 'Aiframe',
        component: Aiframe
    },
  ]
})
