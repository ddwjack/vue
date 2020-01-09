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
import Apassword from '@/page/Apassword' // 找回密码    
import xgpassword from '@/page/xgpassword' // 找回密码    
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
import videoPlay from '@/page/videoPlay' // 播放页面 
import homeVideo from '@/page/homeVideo' // 首页的视频  
import feaRadio from '@/page/feaRadio' // 热门子页面   
import tvlive from '@/page/tvlive' // 电视直播1   
import tvplay from '@/page/tvplay' // 电视播放  
import liveList from '@/page/liveList' // 游戏直播列表  
import open_agent_win from '@/page/open_agent_win' // 代理合伙人--开通代理  
import HtmlPanel from '@/components/HtmlPanel' //  未用 测试

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'vivenull',
        component: vivenull,
        meta: { keepAlive: false }
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
        path: '/xgpassword',
        name: 'xgpassword',
        component: xgpassword,
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: { keepAlive: true }
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
        component: Featured,
        meta: { keepAlive: true }
    },
    {
        path: '/find',
        name: 'find',
        component: find,
        meta: { keepAlive: true }
    },
    {
        path: '/welfare',
        name: 'welfare',
        component: welfare,
        meta: { keepAlive: true }
    },
    {
        path: '/userCenter',
        name: 'userCenter',
        component: userCenter,
        meta: { keepAlive: false }
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
        component: hot,
        meta: { keepAlive: true }
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
    {
        path: '/videoPlay',
        name: 'videoPlay',
        component: videoPlay
    },
    {
        path: '/homeVideo',
        name: 'homeVideo',
        component: homeVideo
    },
    {
        path: '/feaRadio',
        name: 'feaRadio',
        component: feaRadio
    },
    {
        path: '/tvlive',
        name: 'tvlive',
        component: tvlive,
        meta: { keepAlive: false }
    },
    {
        path: '/tvplay',
        name: 'tvplay',
        component: tvplay,
        meta: { keepAlive: false }
    },
    {
        path: '/liveList',
        name: 'liveList',
        component: liveList,
        meta: { keepAlive: false }
    },
    {
        path: '/open_agent_win',
        name: 'open_agent_win',
        component: open_agent_win,
        meta: { keepAlive: true }
    },
    
  ]
})
