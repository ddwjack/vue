<template>
    <section>
        <searchhed></searchhed>
        <div class="div_swi_top">
            <swiperHeade></swiperHeade>
        </div>
        <div class="list-title">
            <div class="list-title-l">
              <span style="color:#585858;font-size: 0.3rem"><i class="iconfont icon-zuirehotchunse" style="color:#ff7600;font-size: 0.32rem"></i>福利推荐</span>
            </div>
        </div>
        <section class="aui-grid aui-margin-b-15">
            <div class="aui-row" id="fl_list">
                <loaderGif></loaderGif>
                <!-- <div class="aui-col-xs-3 pt-list" onclick="h5('http://m.kuaidi100.com/index.jsp')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'https://m.douyu.com','title':'斗鱼直播' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/kd.jpg"/></i>
                    <div class="aui-grid-label">斗鱼直播</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'https://m.huya.com/','title':'虎牙直播' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/kk.jpg"/></i>
                    <div class="aui-grid-label">虎牙直播</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('http://m.maoyan.com')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'https://m.qidian.com/','title':'起点小说' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/my.jpg"/></i>
                    <div class="aui-grid-label">起点小说</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('https://m.toutiao.com/?w2atif=1&channel=news_hot#channel=news_hot')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'http://w.aiflg.cn','title':'优惠劵' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/tt.jpg"/></i>
                    <div class="aui-grid-label">优惠劵</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('http://m.lrts.me/')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'http://www.dj520.com/','title':'DJ音乐' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/lr.jpg"/></i>
                    <div class="aui-grid-label">DJ音乐</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('https://xw.qq.com/')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'http://w.aiflg.cn','title':'购物福利' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/tx.jpg"/></i>
                    <div class="aui-grid-label">购物福利</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('https://m.qidian.com/')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'http://m.maoyan.com/#movie','title':'猫眼购票' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/xiaoshuo.jpg"/></i>
                    <div class="aui-grid-label">猫眼购票</div>
                </router-link>
                <!-- <div class="aui-col-xs-3 pt-list"  onclick="h5('http://inews.ifeng.com/?ch=ifengweb_2014')"> -->
                <router-link :to="{path: 'Aiframe', query: {url: 'http://m.longzhu.com/index','title':'龙珠直播' }}" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img src="../image/fh.png"/></i>
                    <div class="aui-grid-label">龙珠直播</div>
                </router-link>
            </div>
        </section>
        <div class="div_over_hid" style="">
            <swiperHeade></swiperHeade>
        </div>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
    import loaderGif from '../components/loader'
    // import "../style/zhibo.css" 
    // import "../style/base.css"
export default {
    name: 'welfare',
    data () {
        return {
        }
    },
    created () {
    },
    mounted () {
        
    },
    methods: {
        
    },
    components: {
        footerFixed,
        swiperHeade,
        searchhed,
        loaderGif
    },
}
</script>
<style scoped>
    
</style>