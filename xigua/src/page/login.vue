<template>
    <section class="padTopX login-bg2">
        <header class="aui-bar aui-bar-nav" id="aui-header" style="background-color:rgba(0,0,0,0) !important">
            <a class="aui-btn aui-pull-left" @click="$router.back(-1)">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div id="title" class="aui-title">会员登录</div>
        </header>
        <loaderGif v-if="isLoading"></loaderGif>
        <div class="myui-from">
            <ul class="myui-from-list">
                <li class="myui-from-list-item">
                    <input type="tel" minlength="11" maxlength="11" id="username" placeholder="请输入账号" class="myui-from-list-item-input" value="">
                </li>
                <li class="myui-from-list-item">
                    <input id="password" minlength="6" maxlength="6" type="password" placeholder="请输入密码" class="myui-from-list-item-input" value="">
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
    import loaderGif from '../components/loader'
    // import "../style/aui.css"
export default {
    name: 'home',
    data () {
        return {
            isLoading:false
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
            let username = document.getElementById('username').value
            let password = document.getElementById('password').value
            console.log(username)
            this.isLoading = true
            if (username.length == 0) {
                this.alertMsg('请输入手机号码')
                return false;
            } else if (!/^1\d{10}$/g.test(username)) {
                this.alertMsg('手機號碼格式錯誤')
                return false;
            } 
            if (password.length === 0) {
                this.alertMsg('請輸入密碼')
                return false;
            } else if (!/^[\dA-Za-z]{6,16}$/g.test(password)) {
                this.alertMsg('密碼格式錯誤')
                return false;
            }
            var postData = {
                username:username,
                passwd:password,
                imei:'861726046976666',
            }
            this.$ajax({
                // url:`${this.baseUrl}login/login/veifys.html?username=123456789999&passwd=123456&imei=861726046976666`,
                url:`${this.baseUrl}login/login/veifys.html`,
                methods:'get',
                params:postData,
                dataType:'json',
            }).then((res)=>{
                this.isLoading = false
                if (res.data.code == '0') {
                    this.alertMsg('请输入正确的手机号或密码')
                }else if(res.data.code == '1'){
                    let ret = res.data
                    if(ret.msg['status'] != 1 ){
                        this.alertMsg('账号被禁用！')
                        return false;
                    }else{
                        this.alertMsg('登录成功！')
                        localStorage.setItem('accountLogin',0);
                        localStorage.setItem('user_id', ret.msg['id']);
                        localStorage.setItem('user_name', username);
                        localStorage.setItem('password', password);
                        localStorage.setItem('user_time', ret.msg['time']);
                        localStorage.setItem('user_share', ret.msg['share']);
                        localStorage.setItem('user_advert', ret.msg['advert']);
                        localStorage.setItem('user_code', ret.msg['code']);
                        localStorage.setItem('power', ret.msg['power']);
                        localStorage.setItem('url', ret.msg['url']);
                        localStorage.setItem('url1', ret.msg['url1']);
                        localStorage.setItem('url2', ret.msg['url2']);
                        localStorage.setItem('url3', ret.msg['url3']);
                        localStorage.setItem('url4', ret.msg['url4']);
                        localStorage.setItem('url5', ret.msg['url5']);
                        localStorage.setItem('url6', ret.msg['url6']);
                        localStorage.setItem('url7', ret.msg['url7']);
                        localStorage.setItem('user_nickname', ret.msg['nick_name']);
                        localStorage.setItem('tjryqma',ret.msg['sjyqma']);
                        localStorage.setItem('stdejb',ret.msg['stjb']);
                        localStorage.setItem('user_zfb',ret.msg['zfb']);
                        localStorage.setItem('user_weichat', ret.msg['weichat']);
                        localStorage.setItem('user_sharema',ret.msg['share_ma']);
                        this.$router.push('/userCenter')
                    }
                }else{
                    this.alertMsg('网络错误 请检查!')
                }
            }).catch((res)=>{
                console.log(res)
            })
        },
        alertMsg(title){
            this.isLoading=false
            this.$toast({message: title,position: 'bottom',duration: 2000});
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
        loaderGif
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