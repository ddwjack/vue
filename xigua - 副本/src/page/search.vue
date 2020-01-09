<template>
    <section class="margTopX">
        <header class="aui-navBar aui-navBar-fixed" style="background: #fff;position: fixed;height:1rem;;width: 100%;" id="aui-header">
            <a @click="$router.back(-1)" class="aui-navBar-item"  >
                <i class="icon icon-back"></i>
            </a>
            <div class="div_searc_two aui-center">
                <p class="p_img_sear">
                    <input id="lst_sear" class="inp_form" type="text" placeholder="请输入影片名"> 
                    <span onClick="searList()"><img class="img_sear" src="../images/xigua/search.png" alt=""></span>
                </p>
            </div>
        </header>
        <div class="wrap">
            <div class="game-page">
                <div class="sea_div_detil" id="liveList" style="padding-top:1.12rem;">
                    <ul id="div_list">
                        <loaderGif></loaderGif>
                        <li class="li_lst_sea" @click="godetail('名字','9.8','2035播放量','类型','导演')" ref="Fdeta" data-g="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" data-x="描述" data-y="演员">
                            <img src="https://img.xtsdy.com/upload/vod/20191107/e66fc00f528a6985c5e85e104656243f.jpg" alt="">
                            <p>标题</p>
                            <p class="p_miaoshu">描述呢合适的机会发货是等级考核方式的尽快发货四大皆空描述呢合适的机会发货是等级考核方式的尽快发货四大皆空</p>
                            <p class="p_pingfen">评分：9.8分</p>
                            <p class="p_bot_pad"><span>日本</span></p>
                        </li>
                        <li class="li_lst_sea">
                            <img src="https://img.xtsdy.com/upload/vod/20191107/e66fc00f528a6985c5e85e104656243f.jpg" alt="">
                            <p>标题</p>
                            <p class="p_miaoshu">描述呢合适的机会发货是等级考核方式的尽快发货四大皆空描述呢合适的机会发货是等级考核方式的尽快发货四大皆空</p>
                            <p class="p_pingfen">评分：9.8分</p>
                            <p class="p_bot_pad"><span>日本</span></p>
                        </li>
                        <li class="li_lst_sea">
                            <img src="https://img.xtsdy.com/upload/vod/20191107/e66fc00f528a6985c5e85e104656243f.jpg" alt="">
                            <p>标题</p>
                            <p class="p_miaoshu">描述呢合适的机会发货是等级考核方式的尽快发货四大皆空描述呢合适的机会发货是等级考核方式的尽快发货四大皆空</p>
                            <p class="p_pingfen">评分：9.8分</p>
                            <p class="p_bot_pad"><span>日本</span></p>
                        </li>
                        <li class="li_lst_sea">
                            <img src="https://img.xtsdy.com/upload/vod/20191107/e66fc00f528a6985c5e85e104656243f.jpg" alt="">
                            <p>标题</p>
                            <p class="p_miaoshu">描述呢合适的机会发货是等级考核方式的尽快发货四大皆空描述呢合适的机会发货是等级考核方式的尽快发货四大皆空</p>
                            <p class="p_pingfen">评分：9.8分</p>
                            <p class="p_bot_pad"><span>日本</span></p>
                        </li>
                        <li class="li_lst_sea">
                            <img src="https://img.xtsdy.com/upload/vod/20191107/e66fc00f528a6985c5e85e104656243f.jpg" alt="">
                            <p>标题</p>
                            <p class="p_miaoshu">描述呢合适的机会发货是等级考核方式的尽快发货四大皆空描述呢合适的机会发货是等级考核方式的尽快发货四大皆空</p>
                            <p class="p_pingfen">评分：9.8分</p>
                            <p class="p_bot_pad"><span>日本</span></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import loaderGif from '../components/loader'
    import "../style/zhibo.css"
    import "../style/base.css"
export default {
    // name: 'home',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created(){
        console.log(this.$route.params.id)
    },
    methods:{
        godetail(nm,sco,play,clas,director){
            // let thisG = this.$refs.Fdeta.dataset.g
            // this.$router.push({name: 'videodetail', params:{id:nm,score:sco,}})
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
    },
}
</script>
<style scoped>
    

    /*搜索页面*/
    .div_searc_two{
        padding:0px 16px 10px;
    }
    .div_searc_two p{
        display: inline-block;

    }
    .div_searc_two .p_title{
        font-size: .36rem;
        color: #da5895;
        font-weight: 600;
        width: 26%;
    }
    .div_searc_two .p_img_sear{
        background: #F0F2F5;
        width: 70%;
        height: .6rem;
        line-height: .6rem;
        text-indent: 10px;
        border-radius: .6rem;
        margin-top: -.06rem;
    }
    .div_searc_two .inp_form{
        position: relative;
        width: 70%;
        border:0;
        text-indent: 16px;
        height: .6rem;
        outline-style: none;
        background: transparent;
    }
    .div_searc_two .p_img_sear span{
        position: relative;
        float: right;
        top: -.6rem;
    }
    .div_searc_two .p_img_sear span:after{
        position: absolute;
        content: '';
        background: red;
        width: 1px;
        height: .32rem;
        top: 7px;
        right: .8rem;
    }
    .div_searc_two .p_img_sear span::before{
        position: absolute;
        content: '';
        width: .8rem;
        height: .6rem;
        right: 0;
        top: 0;
    }
    .div_searc_two .img_sear{
        width: .32rem;
        height: .32rem;
        float: right;
        margin: 6px 10px 0 0 ;
    }
</style>