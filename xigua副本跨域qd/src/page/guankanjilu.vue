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
        <ul id="list" class="list div_swi_top">
            <li onclick="go_detail('');">
                <div class="left">
                    <div class="logo_frame">
                        <img src="../images/xigua/ziyuan-2.png" />
                    </div>
                </div>
                <div class="info">
                    <div class="list_title">小小的愿望小小的愿望小小的愿望小小的愿望小小的愿望</div>
                    <div class="list_date">11-13 15:05</div>
                </div>
            </li>
        </ul>
        <!-- <ul id="list" class="list">
            <script id="list_template" type="text/x-dot-template">
                <li onclick="go_detail('{{=it.url}}', '{{=it.title}}');">
                    <div class="left">
                        <div class="logo_frame">
                            <img src="{{=it.logo}}" />
                        </div>
                    </div>
                    <div class="info">
                        <div class="list_title">{{=it.title}}</div>
                        <div class="list_date">{{=it.date_str}}</div>
                    </div>
                </li>
            </script>
        </ul> -->
    </section>
</template>

<script>
    // import titleHed from '../components/titleHed'
    // import "../style/aui.css"
export default {
    name: 'money',
    data () {
        return {
            // txet:this.$route.query.url
        }
    },
    created () {
        console.log(this.$route.query)
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