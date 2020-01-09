<template>
    <section class="padTopX">
        <header class="aui-navBar aui-navBar-fixed" style="background: #fff;" id="aui-header">
            <a @click="$router.back(-1)" class="aui-navBar-item">
                <i class="icon icon-back"></i>
            </a>
            <div class="aui-center">
                <span class="aui-center-title"   id="title">  观看记录</span>
            </div>
            <a onclick="clearR_Confirm()" class="aui-navBar-item" style="color: #725f5f;"  >
                <i class="icon icon-qingli"></i> 清空
            </a>
        </header>
        <!--  Adat -->
        <loaderGif v-if="isLoading"></loaderGif>
        <ul id="list" class="list div_swi_top">
            <li v-for="item in Adat" @click="go_detail(item.url);">
                <div class="left">
                    <div class="logo_frame" v-if="item.ping==='优酷'">
                        <img src="../image/jilu_logo/youku.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='爱奇艺'">
                        <img src="../image/jilu_logo/iqiyi.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='腾讯'">
                        <img src="../image/jilu_logo/tengxun.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='搜狐'">
                        <img src="../image/jilu_logo/sohu.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='PPTV'">
                        <img src="../image/jilu_logo/pptv.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='芒果'">
                        <img src="../image/jilu_logo/mgtv.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='M1905'">
                        <img src="../image/jilu_logo/m1905.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='暴风'">
                        <img src="../image/jilu_logo/baofeng.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='乐视'">
                        <img src="../image/jilu_logo/letv.png" />
                    </div>
                    <div class="logo_frame" v-else-if="item.ping==='风行'">
                        <img src="../image/jilu_logo/fengxing.png" />
                    </div>
                    <div class="logo_frame" v-else>
                        <img src="../image/jilu_logo/weizhi.png" />
                    </div> 
                </div>
                <div class="info">
                    <div class="list_title">{{item.title}}</div>
                    <div class="list_date">{{item.time | formatDate}}</div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    import loaderGif from '../components/loader'
    // import titleHed from '../components/titleHed'
    // import "../style/aui.css"
export default {
    name: 'money',
    data () {
        return {
            Adat:[],
            isLoading:true
            // txet:this.$route.query.url
        }
    },
    filters: {
        formatDate: function (value) {
            let Atime = value * 1000
            let date = new Date(Atime);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            // return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
            return MM + '-' + d + ' ' + h + ':' + m;
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}login/login/newjilu?uid=`+localStorage.getItem('user_id'),
            dataType:'json',
            // headers:{'Content-Type':'http://localhost:8081/'},
        }).then((res) => {
            console.log(res.data)

            this.isLoading = false
            let Alist = document.getElementById('list')
            if (res.data.code == '0') {
                Alist.innerHTML = '<section class="m-noRecord"><div class="c-info">看过的那些精彩视频会保存在这里</div></section>';
                return false;
            }
            this.Adat = res.data.msg
            // console.log(69)
        }).catch((res)=>{
            this.isLoading = false
            console.log('请求失败')
        })
    },
    methods: {
        go_detail(url){
            var jx_url2 = localStorage.getItem('jx_url2');
            console.log(jx_url2)
            // return false;   Http://api.6uzi.com/?url=  http://m.v.qq.com/cover/u/u9z5s6rt4j30fjh.html?ptag=v_qq_com
            // https://m.v.qq.com/x/cover/z/zakxqvkl9ewt0of.html  http://m.v.qq.com/cover/m/mzc00200adatz5i.html?vid=e003300zmeq
            this.$router.push({
                name: 'videoPlay',
                params:{
                    id: '',
                    // url: 'Http://api.6uzi.com/?url=http://m.v.qq.com/cover/u/u9z5s6rt4j30fjh.html?ptag=v_qq_com',
                    // url: 'http://api.6uzi.com/?url='+url,
                    url: 'https://vip.bljiex.com/?v='+url,
                }
            });
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
    .aui-center{
        margin-left: 0;
    }

    .list li{
            box-sizing: border-box;
            height:1.46rem;
            width:100%;
            border-bottom:1px solid #f0f0f0;
            padding-left:1.6rem;
        }
        .left{
            float:left;
            width:1.6rem;
            height:100%;
            margin-left:-1.6rem;
        }
        .logo_frame{
            width:.92rem;
            height:.92rem;
            margin-top:.34rem;
            margin-left:.34rem;
            overflow: hidden;
        }
        .logo_frame img{
            width:100%;
        }
        .info{
            float:left;
            width:100%;

        }
        .list_title{
            box-sizing: border-box;
            padding-right:.2rem;
            margin-top:.16rem;
            width:95%;
            font-size:.3rem;
            line-height:.8rem;
            font-family: '"PingFang SC';
            min-height:.8rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap;
        }
        .list_date{
            margin-top:0px;
            font-size:.28rem;
            color:#767676;
        }
        .empty{
            width:100%;
            height:.6rem;
            line-height:.4rem;
            font:.28rem;
            text-align:center;
            margin-top:.2rem;

        }
    
    .aui-navBar-item{
        min-width: 24%;
        flex: 0 0 24%;
    }

    /*新加空提示信息*/

    .m-noRecord {
    padding: .395rem 0 0;
    text-align: center;
}

.m-noRecord .c-icon-noRecord {
    background: url(../image/app/Browsehistory.png) no-repeat;
    background-size: cover;
        width: 5rem;
    height: 4.6rem;
    /* margin: .485rem auto 0; */
    margin: 0 auto;
      margin-top: 50px;
        opacity:0.4;    /*图片透明度*/
        filter:alpha(opacity=40); /* 针对 IE8 以及更早的版本 */
}
.m-noRecord .c-info {
    color: #cecfce;
    line-height: 4rem;
    padding: .25rem 0;
    font-size: .8rem;
}
</style>