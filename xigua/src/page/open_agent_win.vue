<template>
    <section class="padTopX">
        <titleHed text="开通代理"></titleHed>
        <!-- <p v-html="html"></p> -->
        <div class="open-vip-t div_swi_top">
            <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="FF5B5C" bgcolor="#FFFFFF">
                <tr>
                  <td bgcolor="#f0433d"><iframe src="http://www.lqpph.com/shuju" width="100%" height=150 marginheight="0" marginwidth="0" frameborder="0" scrolling="no"></iframe></td>
                </tr>
                <tr></tr>
            </table>
            <div class="br"></div>
            <div class="aui-content aui-margin-b-15"></div>
            <div class="aui-content-padded">
                <div class="vip_gou_1" onclick="buyAgent()">
                    <div  class="vip_gou_2"><span class="vip_gou_3">合伙人</span>  </div>
                    <div class="vip_gou_4"><h2  class="vip_gou_5">月赚万元的机会</h2>
                        <p class="vip_gou_6" ><em class="vip_gou_7">限量</em></p>
                    </div>
                    <div  class="vip_gou_8" >立即升级</div>
                </div> 
            </div>
            <br>
            <div class="open-vip-b" >
                <div class="open-vip-b" >
                    <p>
                        <router-link class="aui-btn-tuichu aui-btn-block" :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="div"  >
                        点击查看 合伙人介绍</router-link>
                        <!-- <div  onClick="h5('http://www.lqpph.com/xxx/?id=81')" ></div> -->
                    </p>
                </div>
                <br>
            </div>
            <img src="../image/app/VipExpiredTisi.png">
            <br>
        </div>
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    import "../style/myui.css"
export default {
    name: 'home',
    data () {
        return {
            txet:this.$route.query.url,
            loading: false,
            html: ''
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        
    },
    methods: {
        load (url) {

        }
    },
    components: {
       titleHed
    },
}
</script>
<style scoped>
    .vip_gou_1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 100%;
        position: relative;
        box-shadow: 0 1px 12px #ddd;
        margin: 10px 0px 10px 0px;
        padding: 15px 17px;
        bottom: 10px;
        top: 10px;
    }

    .vip_gou_2 {
        margin-right: .2em;
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }


    .vip_gou_3 {
        font-size: .3rem;
        width: 100%;
        max-height: 100%;
        vertical-align: top;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: -o-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: linear-gradient(to right, #ff5e3e 0%, #ff1679 100%);
        -webkit-background-clip: text;
        color: transparent;
    }

    .vip_gou_4 {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 0;
    }

    .vip_gou_5 {
      font-weight: 400;
      font-size: 0.28rem;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
      color: #c0c0c0;
      padding-bottom: 10px;

    }

    .vip_gou_6 {
        color: #808080;
        font-size: 0.28rem;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .vip_gou_7 {
        font-size: 0.3rem;
        font-style: normal;
        background: -webkit-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: -o-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: linear-gradient(to right, #ff5e3e 0%, #ff1679 100%);
        -webkit-background-clip: text;
        color: transparent;
        font-weight: bold;
    }

    .vip_gou_8 {
        background-image: -webkit-gradient(linear,left top,right top,from(#ff5e3e ),to(#ff1679 ));
        background-image: -webkit-linear-gradient(left,#ff5e3e,#ff1679);
        background-image: -moz-linear-gradient(left,#ff5e3e,#ff1679);
        background-image: linear-gradient(to right,#ff5e3e,#ff1679);
        background-color: #f7cc13;
        border-radius: 2px;
        color: #fff;
        font-size: 0.3rem;
        font-weight: bold;
        padding: 0.1rem 0.1rem;
    }
    .STYLE1 {
        color: #FFFFFF;
        font-weight: bold;
        font-size: 16px;
    }
</style>