<template>
    <section class="wrapper">
        <header class="head margTopX">
            <img id="homshuaxin" class="hed_img_icon" src="../images/audio/xiao.png" alt="#">
            <p @click="gosearch('2')" id="home_sea" class="">
                <span id="inSearch" class="inp_sea">輸入搜索關鍵詞</span>
                <img class="im_ss" src="../images/room/sousuo.png" alt="">
            </p>
            <img id="img_ldt" class="Img_search I_hist"  src="../images/audio/lishi-2.png" alt="">
        </header>
        <section class="sec_feat">
            <div class="div_lis">
                <img class="w100" src="../images/channel/home1.png" alt="">
                <p class="p_title">青岩星光</p>
                <ul class="ul_bot">
                    <li class="li"><img class="img" src="../images/featured/bofang-8.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/xing.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/qipao.png" alt="#"><span class="span">6852</span></li>
                </ul>
            </div>
            <div class="div_lis">
                <img class="w100" src="../images/channel/home1.png" alt="">
                <p class="p_title">青岩星光</p>
                <ul class="ul_bot">
                    <li class="li"><img class="img" src="../images/featured/bofang-8.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/xing.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/qipao.png" alt="#"><span class="span">6852</span></li>
                </ul>
            </div>
            <div class="div_lis">
                <img class="w100" src="../images/channel/home1.png" alt="">
                <p class="p_title">青岩星光</p>
                <ul class="ul_bot">
                    <li class="li"><img class="img" src="../images/featured/bofang-8.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/xing.png" alt="#"><span class="span">6852</span></li>
                    <li class="li"><img class="img" src="../images/featured/qipao.png" alt="#"><span class="span">6852</span></li>
                </ul>
            </div>
        </section>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
import footerFixed from '../components/footer'
export default {
    name: 'home',
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    methods:{
        gosearch(id) {
            this.$router.push('/search/' + id)
            console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        },
    },
    components: {
        footerFixed,
    },
}
</script>
<style scoped>
    /*头部搜索*/
    .wrapper .head {
        background: linear-gradient(90deg,rgba(144,19,254,1) 0%,rgba(113,210,255,1) 100%);
        height: 3.42rem;
        /*position: fixed;*/
        width: 100%;
        padding-top: .16rem;
        /*top: 0;*/
        /*z-index: 99;*/
    }
    .hed_img_icon {
        position: absolute;
        width: .36rem;
        border-radius: 0;
        top: .24rem;
        left: .32rem;
    }
    #home_sea {
        width: 76%;
        margin: 0 auto;
        border-radius: 30px;
        height: .6rem;
        line-height: .6rem;
        color: #fff;
        text-align: left;
        background: rgba(0,0,0,0.2);
    }
    .wrapper .inp_sea {
        position: relative;
        height: .6rem;
        display: inline-block;
        background: transparent;
        width: 85%;
        padding-left: .2rem;
    }
    .wrapper .inp_sea:after {
        content: '';
        position: absolute;
        height: .32rem;
        width: 1px;
        right: .32rem;
        top: .14rem;
        background: rgba(255,255,255,0.5);
    }
    .wrapper .im_ss {
        width: .36rem;
        height: .36rem;
        border-radius: 30px;
        vertical-align: middle;
    }
    .wrapper .I_hist{
        position: absolute;
        width: .4rem;
        top: .24rem;
        width: .44rem;
        right: .32rem;
        border-radius: 0;
    }
    .sec_feat{
        padding:0 .32rem;
        margin: -2.36rem 0 1.2rem;
    }
    .sec_feat .div_lis{
        position: relative;
        background: #fff;
        width: 100%;
        margin-bottom: .2rem;
        border-radius: 5px;
        border:5px solid rgba(255,255,255,1);
    }
    .sec_feat .p_title{
        position: absolute;
        color: #fff;
        bottom: .68rem;
        text-indent: .32rem;
        font-size: .34rem;
        height: .88rem;
        line-height: .88rem;
        width: 100%;
        background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    }
    .sec_feat .ul_bot{
        height: .68rem;
        line-height: .88rem;
        margin-top: -.12rem;
        display: flex;
    }
    .sec_feat .ul_bot .li{
        flex: 1;
        font-size: .26rem;
        color: #657786;
        text-align: center;
    }
    .sec_feat .ul_bot .img{
        position: relative;
        width: .28rem;
        height: .28rem;
        margin-right: .3rem;
        top: 2px;
    }
    .sec_feat .ul_bot .span{

    }
</style>