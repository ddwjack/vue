<template>
    <section class="wrapper col_fff">
        <header class="head margTopX">
            <img id="homshuaxin" class="hed_img_icon" src="../images/audio/xiao.png" alt="#">
            <p @click="gosearch('1')" id="home_sea" class="">
                <span id="inSearch" class="inp_sea">輸入搜索關鍵詞</span>
                <img class="im_ss" src="../images/room/sousuo.png" alt="">
            </p>
            <img id="img_ldt" class="Img_search I_hist"  src="../images/audio/lishi-2.png" alt="">
        </header>
        <div class="div_swi_top">
            <swiperHeade></swiperHeade>
        </div>
            <router-view></router-view>

        <ul class="ul_table">
            <li class="li_list">
                <a href="javascript:void(0)">
                    <img src="../images/channel/lab1.png" alt="#">
                    <p>热播影视</p>
                </a>
            </li>
            <li class="li_list">
                <a href="javascript:void(0)">
                    <img src="../images/channel/lab2.png" alt="#">
                    <p>高清电影</p>
                </a>
            </li>
            <li class="li_list">
                <a href="javascript:void(0)">
                    <img src="../images/channel/lab3.png" alt="#">
                    <p>爆笑动漫</p>
                </a>
            </li>
            <li class="li_list">
                <a href="javascript:void(0)">
                    <img src="../images/channel/lab4.png" alt="#">
                    <p>综艺娱乐</p>
                </a>
            </li>
            <li class="li_list">
                <a href="javascript:void(0)">
                    <img src="../images/home/overIcon.png" alt="#">
                    <p>全部</p>
                </a>
            </li>
        </ul>
        <div class="hom_div_guang">
            <ul id="ul_vip" class="hom_ul_fx" >
                <li class="w33">VIP觀影特權</li>
                <li class="w28"></li>
                <li class="w33 ho_li_rig">VIP无限次观影 <i class="i_hom_icon"></i></li>
            </ul>
            <ul id="ul_molid" class="hom_ul_fx" >
                <li class="w70">校驗手機領取特權</li>
                <li class="w28 ho_li_rig">去校驗<i class="i_hom_icon"></i></li>
            </ul>
        </div>
        <section class="sec_padding">
            <div class="div_tj">
                <!-- <router-link to="/home/tabdetail" tag="h3"> -->
                    <h3><img src="../images/home/iconTj.png" alt="#">推荐</h3>
                <!-- </router-link> -->
                <ul>
                    <!-- <li class="li_tj_list"> -->
                    <router-link to="/tabdetail" tag="li" class="li_tj_list"> 
                        <img class="w100" src="../images/channel/home1.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </router-link>
                    <!-- </li> -->
                    <router-link to="/tabdetail" tag="li" class="li_tj_list"> 
                        <img class="w100" src="../images/channel/home1.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </router-link>
                    <router-link to="/tabdetail" tag="li" class="li_tj_list"> 
                        <img class="w100" src="../images/channel/home1.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </router-link>
                </ul>
            </div>
            <div class="div_zxsp">
                <!-- <router-link to="/classdetail" tag="h3"> -->
                <router-link to="/hot" tag="h3">
                <!-- <h3 @click="goclassdeta()"> -->
                    <img src="../images/home/icon_Zx.png" alt="#">最新视频 
                    <span class="span_right">更多&nbsp;&nbsp;<img src="../images/home/main_more.png" alt=""></span>
                <!-- </h3> -->
                </router-link>
                <ul>
                    <li class="li_zx_list">
                        <img class="w100" src="../images/channel/home1.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_zx_list">
                        <img class="w100" src="../images/channel/home2.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_zx_list">
                        <img class="w100" src="../images/channel/home3.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_zx_list">
                        <img class="w100" src="../images/channel/home4.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                </ul>
                <p class="center"><img id="img_load" src="../images/home/qh.png" alt="#"></p>
            </div>

            <div class="div_bqfl">
                <h3>
                    <img src="../images/home/icon_Zx.png" alt="#">标签分类 
                    <!-- <span class="span_right">更多&nbsp;&nbsp;<img src="../images/home/main_more.png" alt=""></span> -->
                </h3>
                <ul>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home1.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home2.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home3.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home4.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home3.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                    <li class="li_bq_list">
                        <img class="w100" src="../images/channel/home4.png" alt="">
                        <p class="center">蝌蚪精品</p>
                    </li>
                </ul>
            </div>
            <div class="div_rqfl">
                <h3>
                    <img src="../images/home/icon_Zx.png" alt="#">人气分类 
                    <span class="span_right">更多&nbsp;&nbsp;<img src="../images/home/main_more.png" alt=""></span>
                </h3>
                <div id="AV_list" class="rqny" style="overflow: hidden;">
                    <div class="div_sold">
                        <!-- <a class="A_nu_list" href="javascript:void(0)">   -->
                        <router-link to="/AVlist" tag="a" class="A_nu_list"> 
                            <i class="i_icon">43部電影</i> 
                            <img class="nu_img" src="../images/channel/home2.png" onerror="javascript:this.src='../images/channel/home2.png'" alt="#">
                            <p class="nv_title">波多野結衣</p>
                            <p class="nv_text">波多野结衣（はたの ゆい），女，1988年5月24日出生于日本京都府，著名日本女演员、AV女优。</p>
                        </router-link>
                        <!-- </a> -->
                        <div class="Div_Ul">
                            <ul class="ul_rqny w100">
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="div_sold">
                        <!-- <a class="A_nu_list" href="javascript:void(0)">   -->
                        <router-link to="/AVlist" tag="a" class="A_nu_list"> 
                            <i class="i_icon">43部電影</i> 
                            <img class="nu_img" src="../images/channel/home2.png" onerror="javascript:this.src='../images/channel/home2.png'" alt="#">
                            <p class="nv_title">波多野結衣</p>
                            <p class="nv_text">波多野结衣（はたの ゆい），女，1988年5月24日出生于日本京都府，著名日本女演员、AV女优。</p>
                        </router-link>
                        <!-- </a> -->
                        <div class="Div_Ul">
                            <ul class="ul_rqny w100">
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                                <li class="li_ny" data-t="actVideo" data-v="173" data-c="2" data-i="">
                                    <i class="opactiy new_opac"></i>
                                    <img style="background:url(images/channel/home3.png);background-size:100% 100%;" class="ny_img w100" src="../images/channel/home3.png" onerror="javascript:this.src='../images/channel/home3.png'" alt="#">
                                    <p class="nu_jian"> 自然体で求めてくれる姿が可愛いエッチ</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
    export default {
        name: 'home',
        data () {
            return {
                token:this.GLOBAL.token,//直接通过this访问全局变量。
            }
        },
        mounted(){
            console.log(this.GLOBAL.token)
            // Decrypt.encrypt('12345')
            // console.log(JSON.parse(this.Decrypt.crypt('')))
            var postData = {
                channel:this.GLOBAL.zdid,
                app_key:this.GLOBAL.appkey,
                user_id:this.GLOBAL.meId,
                type:'1'
            }
            // console.log(this.Decrypt.encrypt(postData))
            var secretData = {
                'info' : this.Decrypt.encrypt(postData)
            };
            // console.log(secretData)
            /*axios.post('https://jk.appjkou.xyz/v2/Api/bannel_list', {info:this.Decrypt.encrypt(postData)})
                .then(function (res) {
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
            });*/
            console.log(this.qs.stringify(secretData))
            /*this.$ajax({
              method: 'post',
              url: 'https://jk.appjkou.xyz/v2/Api/bannel_list',
              data: this.qs.stringify(secretData),
            }).then(function(res) {
               console.log(res)
            }).catch(function(err) {
               console.log(err)
            })*/
            /*axios({
              method: 'post',
              url: 'https://jk.appjkou.xyz/v2/Api/bannel_list',
              data: {'info' : this.Decrypt.encrypt(postData)},
              // headers:{'Content-Type':'application/json'}
              headers:{'Content-Type':'application/json ; multipart/form-data'}
            });*/
        },
        methods:{
            gosearch(id) {
                this.$router.push('/search/' + id)
                console.log('/search/' + id)
                // this.$router.push({name: 'search', params:{ id: id}})
            }/*,
            goclassdeta(id){
                this.$router.push('/home/classdetail')
            }*/
        },
        components: {
            footerFixed,
            swiperHeade
            /**/
        }
    }
</script>
<style scoped>
    .wrapper .head {
        background: linear-gradient(90deg,rgba(144,19,254,1) 0%,rgba(113,210,255,1) 100%);
        height: .88rem;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
    }
    .hed_img_icon {
        position: absolute;
        width: .36rem;
        border-radius: 0;
        top: .24rem;
        left: .32rem;
    }
    #home_sea {
        width: 76%;
        margin: .16rem auto 0;
        border-radius: 30px;
        height: .6rem;
        line-height: .6rem;
        color: #fff;
        text-align: left;
        background: rgba(0,0,0,0.2);
    }
    .wrapper .inp_sea {
        position: relative;
        height: .6rem;
        display: inline-block;
        background: transparent;
        width: 85%;
        padding-left: .2rem;
    }
    .wrapper .inp_sea:after {
        content: '';
        position: absolute;
        height: .32rem;
        width: 1px;
        right: .32rem;
        top: .14rem;
        background: rgba(255,255,255,0.5);
    }
    .wrapper .im_ss {
        width: .36rem;
        height: .36rem;
        border-radius: 30px;
        vertical-align: middle;
    }
    .wrapper .I_hist{
        position: absolute;
        width: .4rem;
        top: .24rem;
        width: .44rem;
        right: .32rem;
        border-radius: 0;
    }
    .ul_table{
        padding:.2rem .32rem;
        display: flex;
    }
    .ul_table .li_list{
        flex: 1;
        font-size: .26rem;
        color: #8E8E93;
        text-align: center;
    }
    .ul_table .li_list a{display: block;}
    .ul_table .li_list img{
        width:1rem;
        height: 1rem;
    }
    .hom_div_guang{padding:0 .32rem;}
    .hom_div_guang .hom_ul_fx{
        height: .6rem;
        line-height: .6rem;
        padding:0 .32rem;
        border-radius: 30px;background:linear-gradient(135deg,rgba(113,210,255,1) 0%,rgba(200,109,215,1) 100%);
        box-shadow:0px 2px 4px 0px rgba(144,19,254,0.25);
    }
    .hom_div_guang li{
        display: inline-block;
        font-size: .26rem;
    }
    .hom_div_guang .hom_ul_fx .w33{
        color: #fff;
        font-size: .26rem;
    }
    .hom_div_guang .hom_ul_fx .ho_li_rig{
        position: relative;
        padding-right:.28rem;
        text-align: right;
    }
    .hom_div_guang .hom_ul_fx .i_hom_icon{
        position: absolute;
        background: url(../images/room/xia.png);
        background-size: 100% 100%;
        width: .28rem;
        height: .28rem;
        right: 0;
        top: .16rem;
    }
    .hom_div_guang #ul_molid{
        color: #fff;
        display: none;
    }
    /*推荐分类*/
    .sec_padding{padding:0 .32rem 1.4rem;overflow: hidden;}
    .sec_padding h3{padding:.2rem 0;}
    .sec_padding h3 img{
        width: .24rem;
        height: .24rem;
        font-size: .34rem;
        color: #000;
        margin-right: .2rem;
    }
    .sec_padding li{
        display: inline-block;
        font-size: .26rem;
    }
    .sec_padding .li_tj_list{
        width: 31.3%;
        border-radius: 5px;
        margin-left: 3%;
        color: #2B2B2B;
        overflow: hidden;
    }
    .sec_padding .li_tj_list:nth-of-type(1){
        margin-left: 0;
        background: #F8E71C;
    }
    .sec_padding .li_tj_list:nth-of-type(2){
        background: #76F0FF;
    }
    .sec_padding .li_tj_list:nth-of-type(3){
        background: #FF9ED0;
    }
    .sec_padding .li_tj_list p.center{padding-bottom: .1rem;}
    .sec_padding .span_right{
        float: right;
        font-size: .3rem;
        color: #657786;
    }
    .sec_padding .span_right img{width: .2rem;}
    .div_zxsp .li_zx_list{
        width: 48%;
        margin-right: 4%;
    }
    .div_zxsp .li_zx_list:nth-of-type(2n+0){margin-right: 0;}
    .div_zxsp .li_zx_list img{border-radius: 5px;}
    .div_zxsp .li_zx_list p.center{
        color: #8E8E93;
        padding:0 .2rem .2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    #img_load{
        width: .8rem;
        margin-bottom: .2rem;
    }
    /*标签分类*/
    .div_bqfl,.div_rqfl{position: relative;padding-top:.2rem;}
    .div_bqfl:after,.div_rqfl:after{content: '';position: absolute;top:0rem;left: -.32rem;width: 110%;border-top:.2rem solid #F0F2F5;}
    .div_bqfl .li_bq_list{width: 31.3%;margin-right: 3%;}
    .div_bqfl .li_bq_list:nth-of-type(3n+0){margin-right: 0;}
    .div_bqfl .li_bq_list img{border-radius: 5px;}
    .div_bqfl .li_bq_list p{margin-bottom: .2rem;}
    /*人气分类*/
    .div_rqfl{}
    .rqny{width:100%;margin:0 auto;}
    .A_nu_list{
        position: relative;
        display: block;
        padding: .32rem 2%;
        /*height:1.8rem;*/
        margin-bottom: .2rem;
        border-bottom: 1px solid #ececec;
        overflow: hidden;
    }
    .rqny .div_sold{
        border: 1px solid #ececec;
        margin-bottom:.4rem;
        border-radius:.1rem;
    }
    .A_nu_list .i_icon{
        position: absolute;
        right: -.64rem;
        color: #fff;
        width: 2.2rem;
        height: .48rem;
        line-height: .48rem;
        text-align: center;
        top: .4rem;
        font-style: inherit;
        transform: rotate(50deg);
        background:linear-gradient(135deg,rgba(113,210,255,1) 0%,rgba(200,109,215,1) 100%);
    }
    .A_nu_list .nu_img{
        float:left;
        margin-right: .2rem;
        width:1.28rem;
        height: 1.28rem;
        border-radius: 10%;
    }
    .A_nu_list .nv_title{
        font-size: .32rem;
        width:60%;
    }
    .A_nu_list .nv_text{
        color:#bcc1c5;
        width:60%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
    }
    .Div_Ul{
        overflow: hidden;
        padding: 0 .2rem;
    }
    .ul_rqny{
        padding-bottom: .4rem;
        display: -webkit-box;
        float: left;
        overflow-y: hidden;
    }
    .ul_rqny .li_ny{
        width:49%;
        padding-bottom: .6rem;
        display: -webkit-box;
        position: relative;
        margin-left: .2rem;
    }
    .ul_rqny .li_ny:nth-of-type(1){margin-left: 0;}
    .ul_rqny .nu_jian{
        position: absolute;
        color:#bcc1c5;
        width:100%;
        left: 0;
        bottom: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>