<template>
    <section class="wrapper">
        <searchhed></searchhed>
        <div class="div_swi_top">
            <swiperHeade></swiperHeade>
        </div>
        <div class="list-title">
            <div class="list-title-l">
                <span style="color:#444;font-size: .3rem"><i class="iconfont icon-zuirehotchunse" style="color:#ff7600;font-size: .32rem"></i>热门推荐</span>
            </div>
            <div class="list-title-r" id="wzbox_top"></div>
        </div>
        <div class="tab-panel padBott68">
            <div class="tab-panel-item tab-active">
                <div class="tab-item">
                    <!-- <a  @click="vList()" class="aui-flex b-line"> -->
                    <router-link to="/hot" tag="a" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/app/dianying.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 热门电影</em>
                            </p>
                            <h3>当下最热门推荐</h3>
                            <p>
                                <em class="aui-group-one">不定时更新</em> <em class="aui-group-two">经典热门大片</em>
                            </p>
                        </div>
                        <div class="aui-flex-support">去观看</div>
                    </router-link>
                    <!-- </a> -->
                    <a  onClick="h5('http://www.lqpph.com/music')" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/meng.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 全网音乐</em>
                            </p>
                            <h3>各类在线音乐 </h3>
                            <p>
                                <em class="aui-group-one">实时更新</em> <em class="aui-group-two">热门音乐</em>
                            </p>
                        </div>
                        <div class="aui-flex-support">听音乐</div>
                    </a>
                    <a  onClick="tvList()" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/app/tv.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 电视直播一</em>
                            </p>
                            <h3>在线收看高清CCTV、卫视</h3>
                            <p>
                                <em class="aui-group-one">实时更新</em> <em class="aui-group-two">电视TV</em>
                            </p>

                        </div>
                        <div class="aui-flex-support">去观看</div>
                    </a>
                    <a  onClick="h5('http://www.lqpph.com/zb')" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/app/tv.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 电视直播二</em>
                            </p>
                            <h3>在线收看高清CCTV、卫视 </h3>
                            <p>
                                <em class="aui-group-one">实时更新</em> <em class="aui-group-two">电视TV</em>
                            </p>
                        </div>
                        <div class="aui-flex-support">去观看</div>
                    </a>
                    <a  onClick="gameList()" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/app/game.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 游戏直播</em>
                            </p>
                            <h3>各类游戏在线直播 </h3>
                            <p>
                                <em class="aui-group-one">实时更新</em> <em class="aui-group-two">知名主播</em>
                            </p>
                        </div>
                        <div class="aui-flex-support">去观看</div>
                    </a>
                    <a  onClick="douyinList()" class="aui-flex b-line">
                        <div class="aui-flex-iphone">
                            <img src="../image/app/timg.jpg" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <p>
                                <em class="aui-group-three"> 全网小说</em>
                            </p>
                            <h3>免费小说在线观看</h3>
                            <p>
                                <em class="aui-group-one">实时更新</em> <em class="aui-group-two">全网火热</em>
                            </p>

                        </div>
                        <div class="aui-flex-support">去阅读</div>
                    </a>
                </div>
            </div>
        </div>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
    import "../style/zhibo.css"

export default {
    name: 'home',
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    methods:{
        vList(id) {
            this.$router.push('/hot/')
            // console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        },
    },
    components: {
        footerFixed,
        swiperHeade,
        searchhed
    },
}
</script>
<style scoped>
    /*头部搜索*/
    
</style>