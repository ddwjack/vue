<template>
    <section class="padTopX" >
        <titleHed text="代理专区"></titleHed>
        <div class="div_swi_top">
            <swiperHeade></swiperHeade>
        </div>
        <div class="gonggao" style="border-radius: 0px 0px 30px 30px; box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.05);">
            <!-- <div class="list-title-l">
                <i class="iconfont icon-xitonggonggao" style="background: linear-gradient(to right, #00ffe7, #d800ff); -webkit-background-clip: text; color: transparent;font-size: 1rem"></i>
            </div>
            <div class="gonggao-r" style="float:right;width: 89%;">
                <marquee scrollamount="2">
                    <span id="gonggao" style="background: linear-gradient(to right, #00e7ff, #d800ff); -webkit-background-clip: text; color: transparent;font-size: 0.65rem;padding-top:0.3rem;"></span>
               </marquee>
            </div> -->
            <div class="list-title">
                <div class="list-title-l">
                    <span style="color:#444;font-size: 0.3rem"><i class="iconfont icon-zuirehotchunse" style="color:#ff7600;font-size: 0.32rem"></i>代理专区</span>
                </div>
                <div class="list-title-r" id="wzbox_top">

                </div>
            </div>                
        </div>
        <div class="aui-card-white">
            <div class="aui-palace aui-palace-clear clearfix">
                <a onClick="DailiShezhi()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/tuichu.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>运营设置</h2>
                    </div>
                </a>                        
                <a onClick="GuangGap()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/6566.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>广告设置</h2>
                    </div>
                </a>
                <a onclick="tjyh()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/252.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>提现记录</h2>
                    </div>
                </a>
                <a onClick="DailiQuma()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/666.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>自助取卡</h2>
                    </div>
                </a>                        
            </div>
        </div>
        <div class="aui-card-white">
            <div class="aui-palace aui-palace-clear clearfix">
                <a onClick="DailiGuanLi()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/111.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>代理用户</h2>
                    </div>
                </a>
                <a onClick="wodedaili()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/ddld.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>我的代理</h2>
                    </div>
                </a>
                <a onClick="zqpx()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/dailixitong.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>代理培训</h2>
                    </div>
                </a>
                <a onClick="tjdl()" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/333.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>收入排行</h2>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    import swiperHeade from '../components/seiper'
    // import "../style/style_user.css"

export default {
    name: 'helpwin',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    mounted(){
        /*openWin(url){

        }*/
    },
    methods:{
       /* AtoLogin(){
            this.$router.push({name: 'money'})
        },*/
        /*openWin(){
            console.log(126)
        }*/
    },
    components: {
        titleHed,
        swiperHeade
    },
}
</script>
<style scoped>
    html,
    body {
        background-color: #fff;
        background-size: 100% 100%;
    }
    
    .text-white {
        color: #f4f4f4 !important;
    }
    
    .aui-grid [class*=aui-col-] {
        padding: 0.75rem 0;
    }
    
    .iconfont {
        font-size: 1.5rem
    }
    
    #user_bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-width: 1000px;
        z-index: -10;
        zoom: 1;
        background-color: #fff;
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
    }
    .aui-palace{
        width: 100%;
    }
    .aui-palace-clear .aui-palace-grid{
        padding: .12rem .2rem .24rem .2rem;
    }
</style>