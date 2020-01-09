<template>
    <section class="wrapper padTopX">
        <titleHed text="视频详情"></titleHed>
        <div class="head_div_da" style="padding-top: 1rem;">
            <div class="div_dow">
                <ul>
                    <li class="li_img">
                        <img src="../images/xigua/ziyuan-2.png" alt="">
                    </li>
                    <li class="li_text">
                        <p class="p_top">最新电影 最多好剧 最热综艺 最全动漫</p>
                        <p class="p_bot">高清流畅无广告  永久免费</p>
                    </li>
                    <li class="li_down"><a onclick="downshow()" href="javascript:void(0)">下载</a></li>
                </ul>
            </div>
        </div>
        <div id="detai_conte" class="div_url_vid">
            <loaderGif></loaderGif>
            <!-- <section class="m-noRecord"><div class="c-icon-noRecord"></div> <div class="c-info">奋力加载中...</div></section> -->
            <img class="div_img" src="https://img.xtsdy.com/upload/vod/20191024/8134d82682ec775ff342ed16ece3c271.jpg" alt="">
            <p class="p_titl">麻花影音播放</p>
        </div>
        <div id="contList" class="detail_cont">
            <p class="tp_title">视频名称</p>
            <p class="p_lst">
                <span class="list_tit">评分</span>
                <span class="list_cont">9.8分</span>
                <span class="span_left_pad">播放量</span>
                <span class="list_cont">2305</span>
            </p>
            <p class="p_lst">
                <span class="list_tit">类型</span>
                <span class="list_cont">战争</span>
                <span class="list_cont">剧情</span>
            </p>
            <p class="p_lst">
                <span class="list_tit">导演:</span>
                <span class="">导演</span>
            </p>
            <p class="p_lst">
                <span class="list_tit">演员:</span>
                <span class="">演员1</span>
                <span class="">演员2</span>
                <span class="">演员3</span>
            </p>
            <p class="p_lst">视频简介</p>
            <p class="p_textare">视频简介内容视频简介内容视频简介内容视频简介内容视频简介内容</p>
        </div>
    </section>
</template>

<script>
import titleHed from '../components/titleHed'
import loaderGif from '../components/loader'
import "../style/zhibo.css" 
export default {
    name: 'home',
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created() {
        console.log(this.$route.params)
        // console.log(this.$route.params.)
    },
    methods:{
        gosearch(id) {
            this.$router.push('/search/' + id)
            console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        }
    },
    components: {
        titleHed,
        loaderGif
    },
}
</script>
<style scoped>
    /*头部导航条*/
    .head_set {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
        background: linear-gradient(90deg,rgba(144,19,254,1) 0%,rgba(113,210,255,1) 100%);
        height: .88rem;
        line-height: .88rem;
        margin-bottom: .36rem;
        /* border-bottom: 1px solid #ececec; */
    }
    .div_hed {
        color: #fff;
        text-align: center;
        font-size: .32rem;
        /* font-weight: 600; */
    }
    .div_hed #p_fan {
        position: absolute;
        top: 50%;
        left: 6%;
        background: url(../images/room/leftfff.png);
        background-size: 100% 100%;
        width: .4rem;
        height: .4rem;
        transform: translate(-50%,-50%);
    }
    #p_fan:after {
        content: '';
        position: absolute;
        width: .8rem;
        height: .8rem;
        top: -.2rem;
        left: -.24rem;
    }

    /**/
    .newsList {
        max-height: 100vh;
        overflow-y: auto;
    }
</style>