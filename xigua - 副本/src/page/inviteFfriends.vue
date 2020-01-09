<template>
    <section class="padTopX" style="background-color:#fffae4;height: 100vh;">
        <header class="aui-navBar aui-navBar-fixed" style="background: #fff8dc;" id="aui-header">
            <a @click="$router.back(-1)" class="aui-navBar-item"  >
                <i class="icon icon-back"></i>
            </a>
            <div class="aui-center" style="margin-left: 0;">
                <span class="aui-center-title" id="title" style="background: linear-gradient(to right, red, blue); -webkit-background-clip: text; color: transparent;" >  邀请好友</span>
            </div>
            <a class="aui-navBar-item" style="color: #725f5f;"  >
                <i class="icon"></i>
            </a>
        </header>
        <div class="div_swi_top">
            <img src="../image/share_bg.png" alt="" width="100%">
        </div>
        <div class="sp-content">
            <div class="bigImg">
                <div class="getVip">
                    <button onclick="erweima()">获取二维码</button>
                    <!-- <button onclick="apidowndObj()">获取二维码</button> -->
                    <button onclick="copySet()" id="btn2">邀请好友</button>
                </div>
            </div>
            <div class="rule">
                <h3>
                    <p>活动规则</p>
                </h3>
                <ul>
                    <li>在本页面复制邀请链接或二维码发送给微信或QQ好友</li>
                    <li>好友使用链接后您将获得对应积分（合伙人分享可绑定下级）</li>
                    <li>在获取积分后您可以在APP积分页面兑换新西瓜全网VIP</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import "../style/myui.css"
export default {
    name: 'home',
    data () {
        return {
        }
    },
    created () {
    },
    mounted () {
        
    },
    methods: {
        /*godetail(nm,sco,play,clas,director){
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
        }*/
    },
    components: {
       
    },
}
</script>
<style scoped>
    /*头部搜索*/
    .home_myTripList_bg {
    /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
    overflow: scroll;
  }
</style>