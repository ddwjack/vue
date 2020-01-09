<template>
    <section class="padTopX login-bg2">
        <header class="aui-bar aui-bar-nav" id="aui-header" style="background-color:rgba(0,0,0,0) !important">
            <a class="aui-btn aui-pull-left" @click="$router.back(-1)">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div id="title" class="aui-title">注册</div>
        </header>


        <div class="myui-from">
            <ul class="myui-from-list">
                <li class="myui-from-list-item">
                    <div class="myui-code">
                        <input id="username" type="tel"  minlength="11" maxlength="11" placeholder="输入手机号码" class="myui-from-list-item-input">
                    </div>
                </li>
                <li class="myui-from-list-item">
                    <input id="password" type="password" placeholder="设置密码" class="myui-from-list-item-input">
                </li>
                <li class="myui-from-list-item">
                    <input id="password_reg" type="password" placeholder="再输入一次密码" class="myui-from-list-item-input">
                </li>
                <li class="myui-from-list-item">
                    <input id="share" type="tel" minlength="6" maxlength="6" placeholder="邀请码(选填)" class="myui-from-list-item-input">
                </li>
                <li class="myui-from-list-item">
                    <button id="btn2" type="button" name="button" class="myui-from-list-item-button" @click="toReg()">立即注册</button>
                </li>
            </ul>
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
        toReg(){
            console.log('登录')
        }
    },
    components: {
       // titleHed
    },
}
</script>
<style scoped>
    .login-bg2 {
        background: linear-gradient(to right,#3484d8 0,#039be5 100%);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        height: 100vh;
    }
    .myui-from-list-item-input{
        margin-bottom: .5rem!important;
    }
</style>