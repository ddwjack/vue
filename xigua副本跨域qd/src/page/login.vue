<template>
    <section class="padTopX login-bg2">
        <header class="aui-bar aui-bar-nav" id="aui-header" style="background-color:rgba(0,0,0,0) !important">
            <a class="aui-btn aui-pull-left" @click="$router.back(-1)">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div id="title" class="aui-title">会员登录</div>
        </header>

        <div class="myui-from">
            <ul class="myui-from-list">
                <li class="myui-from-list-item">
                    <input type="tel" minlength="11" maxlength="11" id="username" placeholder="请输入账号" class="myui-from-list-item-input" value="">
                </li>
                <li class="myui-from-list-item">
                    <input id="password" type="password" placeholder="请输入密码" class="myui-from-list-item-input" value="">
                </li>
                <li class="myui-from-list-item">
                    <button type="button" name="button" class="myui-from-list-item-button" @click="loginTo()">马上登录</button>
                </li>
            </ul>
        </div>
        <div class="to-login-box">
            <!-- <div class="to-login" onclick="openWin('repass')"> -->
            <router-link to="/Apassword" tag="div" class="to-login">找回密码</router-link>
            <router-link to="/Aregister" tag="div" class="to-login-l">注册账号</router-link>
                
            <!-- </div> -->
            <!-- <div class="to-login-l" onclick="openWin('reg_frm')">注册账号</div> -->
        </div>
    </section>
</template>

<script>
    
    // import "../style/aui.css"
export default {
    name: 'home',
    data () {
        return {
            // txet:this.$route.query.url
        }
    },
    created () {
        // console.log(this.$route.query)
    },
    mounted () {
    },
    methods: {
        loginTo(){
            console.log('登录')
        }
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
       // titleHed
    },
}
</script>
<style scoped>
    .login-bg2 {
        background: -webkit-gradient(linear,left top, right top,color-stop(0, #03bbf4),to(#d800ff));
        background: linear-gradient(to right,#03bbf4 0,#d800ff 100%);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        height: 100vh;
    }
    .myui-from-list-item-input{
        border-radius: 30px !important;
        margin-bottom: .5rem!important;
    }
    .myui-from-list-item-button {
        background: #fff;
        color: #269cf6 !important;
        border-radius: 30px !important;
        margin-top: .48rem;
    }
    .to-login,.to-login-l{
        font-size: .32rem;
    }
</style>