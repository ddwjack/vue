<template>
    <section class="wrapper">
        <titleHed text="热门电影"></titleHed>
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
        <div class="wrap">
            <div class="game-page">
                <div class="" id="liveList" style="padding-top:10px;">
                    <ul class="clearfix" id="div_list">
                        <li class="li_fmTwo" onclick="">
                            <div class="video-mask-box">
                                <ul class="ul_fons">
                                    <loaderGif></loaderGif>
                                    <li class="li_w32" @click="godetail('名字','9.8','2035播放量','类型','导演')" ref="Fdeta" data-g="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" data-x="描述" data-y="演员">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32" @click="godetail('名字','9.8','2035播放量','类型','导演')" ref="Fdeta" data-g="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" data-x="描述" data-y="演员">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32" @click="godetail('名字','9.8','2035播放量','类型','导演')" ref="Fdeta" data-g="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" data-x="描述" data-y="演员">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">阿根廷</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="" class="game-pic">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">金发男子</p>
                                        <p class="textar">剧情,爱情 郑址宇 金高银,丁海寅,朴海俊,金国熙</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import titleHed from '../components/titleHed'
import loaderGif from '../components/loader'
import "../style/base.css"
import "../style/zhibo.css"

// import homelist from '../components/homelist'
export default {
    name: 'home',
    data () {
        return {
            
        }
    },
    created() {
        
    },
    methods:{
       godetail(nm,sco,play,clas,director){
            this.$router.push({
                name: 'videodetail',
                params:{
                    id: nm,
                    score: sco,
                    play:play,
                    clas:clas,
                    director:director,
                    thisX:'解放和大家活动结束就是华东师大会撒娇的话会撒娇好几十回家会撒娇哈睡觉觉会撒娇哈哈师大花洒哈手机就',
                    thisG:this.$refs.Fdeta.dataset.g,
                    thisY:this.$refs.Fdeta.dataset.y,
                }
            });
        }
    },
    components: {
        loaderGif,
        titleHed
        // 'homelist': homelist
    },
}
</script>
<style scoped>
    
</style>