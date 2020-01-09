<template>
    <section class="padTopX login-bg2">
        <header class="aui-bar aui-bar-nav" id="aui-header" style="background-color:rgba(0,0,0,0) !important">
            <a class="aui-btn aui-pull-left" @click="$router.back(-1)">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div id="title" class="aui-title">找回密码</div>
        </header>
        <div class="myui-from">
            <ul class="myui-from-list">
                <li class="myui-from-list-item">
                    <div class="myui-code">
                        <input id="username" type="tel"  minlength="11" maxlength="11" placeholder="输入账号" class="myui-from-list-item-input">
                    </div>
                </li>
                <li class="myui-from-list-item">
                    <input id="password" type="password" placeholder="请输入新密码" class="myui-from-list-item-input">
                </li>
                <li class="myui-from-list-item">
                    <button id="btn2" type="button" name="button" class="myui-from-list-item-button" @click="toReg()">找回密码</button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    
    // import "../style/aui.css"
export default {
    name: 'Apassword',
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
            console.log('找回密码')
            let password = document.getElementById('password').value;
            let username = document.getElementById('username').value;
            if(username == ''){
                this.AalertMsg('请输入登录账号')
                return;
            }
            if(username.length != 11){
                this.AalertMsg('请输入正确的号码')
                return;
            }
            if(password == ''){
                this.AalertMsg('请输入密码')
                return;
            }else if(password.length < 6){
                this.AalertMsg('请输入6位以上密码')
                return;
            }
            console.log(61)
            let values = {
                username: username,
                password: password,
            }
            this.$ajax({
                method: 'get',
                url: `${this.baseUrl}login/login/repass.html`,
                params:values,
                dataType:'json',
            }).then((res) => {
                console.log(res)
                if (res.data.code == '0') {
                    this.AalertMsg(res.data.msg)
                }else{
                    this.AalertMsg('修改成功，请重新登录')
                    // setTimeout(function(){
                        this.$router.push('/login')
                    // },500)
                }
                // this.data = res.data
                // this.isLoading = false
            }).catch((res)=>{
                console.log('请求失败')
                this.isLoading = false
            })
        },
        AalertMsg(title){
            this.isLoading=false
            this.$toast({message: title,position: 'bottom',duration: 2000});
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