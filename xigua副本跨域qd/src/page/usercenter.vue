<template>
    <section class="padTopX" style="background: #f5f5f5;padding-bottom: 1.36rem;">
        <searchhed></searchhed>
        <div class="my"></div>
        <div class="my_info">
            <div class="top clearfix">
                <a href="#">
                    <div  class="userlogo" id="userlogo">
                        <img id="user_img" src="../image/app/defaultuser.png" alt="" style="box-shadow: 0 2px 6px 0 rgba(0,0,0,0.3);" alt="">
                    </div>
                    <div class="right">
                        <h3 id="islogin"  style="display: inline-block;">新西瓜欢迎您</h3>
                        <div class="icon-vip" id="islogin_vip" style="vertical-align: top;">
                            <img src="../images/xigua/4.png" alt="">
                            <div style="float:left;border:solid 1px 000;"  id="islogin_vip" ></div>
                            <div style="float:left;border:solid 1px 000;"   id="ispower" > </div>
                            <span id="power" style="float: left;"></span>
                        </div>
                        <router-link to="/login" tag="p"  id="isloginOrOut" style="margin-top: -.64rem;">
                            立刻登录
                        </router-link>
                        <!-- <p id="isloginOrOut" style="margin-top: -.8rem;" >立刻登录</p> -->
                        <p id="time">VIP已到期</p>
                    </div>
                </a>
            </div>
            <div class="center clearfix">
                <!--a  onClick="openWin('jifen_win')">
                    <h1 >我的积分</h1>
                    <h1 id="sign" style="color:red ">- - -</h1>
                </a>-->
            </div>
            <div class="bottom">
                <img src="../images/xigua/7.png" alt="">
                <h3 id="time_ico">我的VIP</h3>
                <a href="javascript:void(0)" @click="AtoLogin()">开通/续费></a>
            </div>
        </div>
        <div class="tool">
            <div class="tool_tit">常用工具</div>
            <div class="tool_nav clearfix">
                <!-- <a href="javascript:void(0)" @click="openWin()"   class="aui-palace-grid"> -->
                <router-link to="/inviteFfriends" tag="a"  class="aui-palace-grid">
                    <img src="../images/xigua/8.png" alt="">
                    <p>分享推荐</p>
                </router-link>
                <!-- </a> -->
                <!-- <a href="javascript:void(0)" onClick="tjyh()"    class="aui-palace-grid"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a" class="aui-palace-grid">
                    <img src="../images/xigua/9.png" alt="">
                    <p>收入明细</p>
                </router-link>
                <!-- <a href="javascript:void(0)" @click="look_record()"  class="aui-palace-grid"> -->
                <router-link to="/guankanjilu" tag="a" href="javascript:void(0)"  class="aui-palace-grid">
                    <img src="../images/xigua/10.png" alt="">
                    <p>观看记录</p>
                </router-link>
                <!-- <a href="javascript:void(0)" onClick="openWin('open_agent_win')" style="padding-bottom: 15px;"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a" style="padding-bottom: .1rem;">
                    <img src="../images/xigua/14.png" alt="">
                    <p>开通合伙人</p>
                </router-link>
                <!-- <a href="javascript:void(0)" onClick="yh()"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a">
                    <img src="../images/xigua/12.png" alt="">
                    <p>名下用户</p>
                </router-link>
                <!-- <a href="javascript:void(0)" onClick="DailiQuma()"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a">
                    <img src="../images/xigua/13.png" alt="">
                    <p>提取卡密</p>
                </router-link>
                <!-- <a href="javascript:void(0)" @click="openWin('http://www.lqpph.com/xxx/?id=2')"   class="aui-palace-grid"> -->
                <router-link :to="{path: 'dailiguanli', query: {url: '1' }}" tag="a"  class="aui-palace-grid" >
                    <img src="../images/xigua/11.png" alt="">
                    <p>代理专区</p>
                </router-link>
                 <!-- <a href="javascript:void(0)" onClick="dlgl()"  class="aui-palace-grid"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a" class="aui-palace-grid" >
                    <img src="../images/xigua/15.png" alt="">
                    <p>现金提现</p>
                </router-link>
            </div>
        </div>
        <ul class="my_ul">
            <li>
                 <!-- <a href="javascript:void(0)" onClick="tjdl()"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=2' }}" tag="a"  >
                    <img src="../images/xigua/25.png" alt="">
                    <h3>收入排行</h3>
                    <p>合伙人收入总排行榜</p>
                </router-link>
            </li>
            <li>
                <!-- <a href="javascript:void(0)" onClick="dljs()"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a"  >
                    <img src="../images/xigua/17.png" alt="">
                    <h3>代理介绍</h3>
                    <p>合伙人申请教程介绍</p>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                 <!-- <a href="javascript:void(0)" onClick="zqpx()"> -->
                <router-link :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=81' }}" tag="a"  >
                    <img src="../images/xigua/25.png" alt="">
                    <h3>赚钱培训</h3>
                    <p>在线学习运营技巧</p>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                <a href="javascript:void(0)" onClick="kefuWeixin()">
                    <img src="../images/xigua/18.png" alt="">
                    <h3>联系客服</h3>
                    <p id="weichat">微信号：qq65795987</p>
                </a>
            </li>
            <li>
                <!-- <a href="javascript:void(0)"> -->
                <router-link to="/Apassword" tag="a">
                    <img src="../images/xigua/16.png" alt="">
                    <h3>修改密码</h3>
                    <p>忘记密码可联系客服</p>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                <!-- <a href="javascript:void(0)" @click="openWin()"> -->
                <router-link to="/helpwin" tag="a">
                    <img src="../images/xigua/17.png" alt="">
                    <h3>常见问题</h3>
                    <p>常见问题解决办法</p>
                </router-link>
            </li>
            <!-- <li>
                <a href="javascript:void(0)" onClick="cleaCache()">
                    <img src="../images/xigua/19.png" alt="">
                    <h3>清理缓存</h3>
                    <p id="cache"></p>
                </a>
            </li> -->
            <li>
                <a href="javascript:void(0)" onClick="checkUpdate()">
                    <img src="../images/xigua/20.png" alt="">
                    <h3>在线更新</h3>
                    <p id="vsion">在线版本：00:00:15</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" onClick="api.alert({title: '免责声明',msg: '本站所有视频均来自互联网，版权归原创者所有，如果侵犯了您的权益，请通知我们，我们将会在3个正常工作日内删除其侵权内容，谢谢合作。',  });">
                    <img src="../images/xigua/21.png" alt="">
                    <h3>关于我们</h3>
                    <p>新西瓜</p>
                </a>
            </li>
        </ul>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import "../style/all.css"

export default {
    name: 'userCenter',
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
        AtoLogin(){
            // this.$router.push({name: 'money'})
            this.$router.push({name: 'money'})
        },
        /*openWin(){
            console.log(126)
        }*/
    },
    components: {
        footerFixed,
        searchhed
    },
}
</script>
<style scoped>
    .my_info .userlogo img {
        float: left;
        width: 1.04rem;
        height: 1.04rem;
        margin-right: .08rem;
        border-radius: 50%;
    }

    .my_info .icon-vip {
        display: inline-block;
    }

    .my_info .icon-vip img {
        height: .36rem;
        margin: .06rem 0 0 .02rem;
        width: .48rem;
    }
    .my{
        position: absolute;
        top:0;
        width: 100%;
        height: 4.4rem;
        z-index: 0;
        /*border-top: 5px solid #fff;*/
    }
</style>