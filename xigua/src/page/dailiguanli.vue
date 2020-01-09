<template>
    <section class="padTopX" >
        <titleHed text="代理专区"></titleHed>
        <div class="div_swi_top">
            <img id="bpic" src="../image/cz_banner.png">
            <!-- <img id="bpic" src="../image/cz_banner.png"  @click="UnloadedCompleted()"> -->
            <!-- <swiperHeade></swiperHeade> -->
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
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/user/pass')" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/tuichu.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>运营设置</h2>
                    </div>
                </a>                        
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/banner/index/id/1.html')" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/6566.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>广告设置</h2>
                    </div>
                </a>
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/getmoney/lists.html')" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/252.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>提现记录</h2>
                    </div>
                </a>
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/dianka/index')" class="aui-palace-grid">
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
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/vip/index')" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/111.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>代理用户</h2>
                    </div>
                </a>
                <a href="javascript:void(0)" @click="DailiShezhi('http://www.lqpph.com/index/user/index')" class="aui-palace-grid">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/ddld.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>我的代理</h2>
                    </div>
                </a>
                <router-link class="aui-palace-grid" :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?cate=1' }}" tag="a" href="javascript:void(0)">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/dailixitong.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>代理培训</h2>
                    </div>
                </router-link>
                <router-link class="aui-palace-grid" :to="{path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?id=2' }}" tag="a" href="javascript:void(0)">
                    <div class="aui-palace-grid-icon">
                        <img src="../image/app/333.png" alt="">
                    </div>
                    <div class="aui-palace-grid-text">
                        <h2>收入排行</h2>
                    </div>
                </router-link>
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
            user_id:localStorage.getItem('user_id'),
            Auser_name:localStorage.getItem('user_name')
        }
    },
    mounted(){
        /*openWin(url){

        }*/
    },
    methods:{
        DailiShezhi(url){
            let values = {
                    username: localStorage.getItem('user_name'),
                    passwd: localStorage.getItem('password'),
                }
            /*if (this.user_id < 1) {
                this.AalertMsg('新西瓜提醒你，你还没有登录哦！')
                // 去登陆 
                this.$router.push({name: 'login', params:{ id: ''}})
                return;
            }*/
            // this.$router.push({path: 'dali_guanli', query: {url: url}})
            if(this.Auser_name != null&&this.Auser_name != undefined&&this.Auser_name != ''&&this.Auser_name != '') {
                this.$ajax({
                    method: 'POST',
                    url: `${this.baseUrl}login/login/veify`,
                    params:values,
                    dataType:'json',
                }).then((res) => { 
                    console.log(res)
                    let ret = res.data
                    if (ret.code == 0) {
                        this.NoAgencyAuthority()
                        return;
                    }else if (ret.code == 1) {
                        this.AalertMsg('验证成功 正在登录')
                        this.$router.push({path: 'dali_guanli', query: {url: url}})
                        // this.$router.push({path: 'dali_guanli', query: {url: url}})
                    }
                }).catch((res)=>{
                    this.AalertMsg('新西瓜提醒您！  网络错误 请检查！')
                })
            }
            //管理员APP设置
            if (localStorage.getItem('user_id')==1)  {
                this.$ajax({
                    method: 'POST',
                    url: `${this.baseUrl}login/login/veify`,
                    params:values,
                    dataType:'json',
                }).then((res) => { 
                    let ret = res.data
                    if (ret.code == 1) {
                        this.AalertMsg('管理员登录')
                        this.$router.push({path: 'dali_guanli', query: {url: url}})
                        // this.$router.push({path: 'dali_guanli', query: {url: 'http://www.lqpph.com/xxx/?cate=1'}})
                        // this.NoAgencyAuthority() 
                        return;
                    }
                }).catch((res)=>{
                    this.AalertMsg('新西瓜提醒您！  网络错误 请检查！')
                })
            }
        },
        AalertMsg(title){
            this.isLoading=false
            this.$toast({message: title,position: 'bottom',duration: 2000});
        },
        NoAgencyAuthority(){
            this.$messagebox.confirm('',{
                title:'提示',
                message:'没有权限',
                confirmButtonText:'升级合伙人',
                cancelButtonText:'以后再说'
            }).then(action => {
                console.log(340)
                this.$router.push({name: 'open_agent_win', params:{ id: ''}})// 
            }).catch((res)=>{
                console.log(185)
            })
        },
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