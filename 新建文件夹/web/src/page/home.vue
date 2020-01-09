<template>
    <section class="wrapper">
        <header class="head margTopX">
            <img id="homshuaxin" class="hed_img_icon" src="../images/audio/xiao.png" alt="#">
            <p id="home_sea" class="">
                <span id="inSearch" class="inp_sea">輸入搜索關鍵詞</span>
                <img class="im_ss" src="../images/room/sousuo.png" alt="">
            </p>
            <img id="img_ldt" class="Img_search I_hist"  src="../images/audio/lishi-2.png" alt="">
        </header>
            <footerFixed></footerFixed>
    </section>
</template>

<script>
    import footerFixed from '../components/footer'
    export default {
        name: 'home',
        data () {
            return {
                token:this.GLOBAL.token,//直接通过this访问全局变量。
            }
        },
        mounted(){
            // this.GLOBAL.encrypt('12345')
            var postData = {
                channel:'ConfigObj.zdid',
                app_key:'ConfigObj.appkey',
                version:'ConfigObj.version',
                client:'client',
                mobile: 'userData[0]',
                password: 'userData[1]',
                mold:'pwd',
                code: '',
            }
            // this.aesensy.encrypt(postData);
            // encrypt()
            /*var secretData = {
              'info' : encrypt(postData)
            };*/
        },
        components: {
            footerFixed,
            /**/
        }
    }
</script>
<style scoped>
    .wrapper .head {
        background: linear-gradient(90deg,rgba(144,19,254,1) 0%,rgba(113,210,255,1) 100%);
        height: .88rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
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
        margin: .16rem auto 0;
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
</style>