<template>
    <section class="wrapper col_fff">
        <searchhed></searchhed>
        <div class="div_swi_top">
            <swiperHeade :Abanner="Abanner"></swiperHeade>
        </div>

        <div class="list-title">
            <div class="list-title-l">
                <span style="color:#444;font-size: 0.28rem"><i class="iconfont icon-zuirehotchunse" style="color:#ff7600;font-size: 0.32rem"></i>VIP观影区</span>
            </div>
            <div class="list-title-r" id="wzbox_top"></div>
        </div>
        <section class="aui-grid">
            <div class="aui-row" id="div_list_f">
                <!--VIP观影区 调用-->
                <!-- <li v-for="item in data">
                  <img :src="item.img[1]">
                  <p>{{item.lei}}</p>
                  <span>￥{{item.price}}</span>
                </li> -->
                <div class="aui-col-xs-3 pt-list" v-for="item in data" :data-url="item.linkurl" onclick="wwLive()">
                    <i class="aui-iconfont"><img :src="item.picurl"/></i>
                    <div class="aui-grid-label">{{item.name}}</div>
                </div>
            </div>
        </section>
        <section class="sec_fix_fx padBott68">
            <div class="div_share">
                <img src="../image/share.png" alt="">
                <p class="p_but"><a @click="Aerweima()" class="Aherf" href="javascript:void(0)">获取二维码</a></p>
                <p class="p_but"><a class="Aherf Aherf_two" onclick="copySetes()" id="Abtn2" href="javascript:void(0)">邀请好友</a></p>
            </div>
        </section>
        <section ref="Aalert" class="sec_alt_hm" v-if="showPrise">
            <div class="div_alert">
                <img class="img_cod" src="http://www.lqpph.com/code.png" alt="">
                <p class="p_title">【牢记339.LA永久域名】</p>
                <p class="p_text_cen">苹果app如果打不开<br/>请登录www.339.La重新下载</p>
                <div class="div_but_a">
                    <a href="javascript:void(0)" @click="altHide()">下次再说</a><a @click="bcCode('1')" href="javascript:void(0)">保存二维码</a>
                </div>
            </div>
        </section>
        <section ref="Acode" class="sec_code_hm" v-if="showRentPrise">
            <div class="div_cod">
                <p class="p_cod_titl">专属二维码</p>
                <p><img class="img_codes" src="http://www.lqpph.com/code.png" alt=""></p>
                <p class="p_a_sub"><a @click="quxiao()" href="javascript:void(0)">取消</a><a @click="bcCode('2')" href="javascript:void(0)">保存</a></p>
            </div>
        </section>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'

    export default {
        name: 'home',
        data () {
            return {
                token:this.GLOBAL.token,//直接通过this访问全局变量。
                data:[],
                Abanner:[],
                showPrise:true,
                showRentPrise:false,
                
            }
        },
        mounted(){
            // console.log(this.Decrypt.encrypt('454545478745454'))
            this.$ajax({
                method: 'get',
                url: `${this.baseUrl}app/nav/index?uid=0`,
                dataType:'json',
                // headers:{'Content-Type':'http://localhost:8081/'},
            }).then((res) => {
                console.log(res)
                this.data = res.data.vip.data
                this.Abanner = res.data.banner.data
                // console.log(res.data.banner.data)
            }).catch((res)=>{
                console.log('请求失败')
            })
            /*this.$ajax({
                method: 'get',
                url: `${this.baseUrl}app/nav/index?uid=0`,
                dataType:'json',
                // headers:{'Content-Type':'http://localhost:8081/'},
            }).then(function(res) {
                console.log(res)
                // console.log(res.data.vip.data[0].name)
                this.data = res.data.vip.data
                console.log(this.data)
            }).catch(function(err) {
                console.log(err)
            })*/
            // console.log(this.GLOBAL.token)
        },
        activated(){ // 每次都会进入此方法
            console.log(this.GLOBAL.token)
        },
        created(){
            
        },
        methods:{
            gosearch(id) {
                this.$router.push('/search/' + id)
                // this.$router.push({name: 'search', params:{ id: id}})
            },
            altHide(){ // 下次再说
                this.showPrise = false
                // this.$refs.Aalert.style = 'display:none;'
            },
            bcCode(ty){ // 保存二维码 1是首次进入二维码 2是主动触发二维码
                if (ty == '1') {
                    this.showPrise = false
                    console.log('保存二维码')
                }else{
                    this.showRentPrise = false
                    console.log('保存二维码2')
                }
            },
            Aerweima(){ // 显示二维码弹框
                this.showRentPrise = true
            },
            quxiao(){  // 取消二维码弹框
                this.showRentPrise = false
            }
        },
        components: {
            footerFixed,
            swiperHeade,
            searchhed
            /**/
        }
    }
</script>
<style scoped>
    
    /*获取二维码*/
    .sec_fix_fx{
        background-color:#F0F2F5;
        padding:10px;
    }
    .sec_fix_fx .div_share{
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
    }
    .sec_fix_fx .div_share .p_but{
        display: inline-block;
        width: 48%;
        text-align: center;
        padding: 10px 0;
    }
    .sec_fix_fx .div_share .Aherf{
        height: 34px;
        line-height: 34px;
        background: #F0F2F5;
        width: 120px;
        font-size: 17px;
        border-radius: 30px;
        color:#657786;
    }
    .sec_fix_fx .div_share .Aherf_two{
        color: #fff;
        background:linear-gradient(135deg,rgba(250,130,90,1) 0%,rgba(247,28,118,1) 100%);
    }

    /*弹框*/
    .sec_alt_hm,.sec_code_hm{
        position: fixed;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        top:0;
        left: 0;
        z-index: 9999;
    }
    .div_alert,.div_cod{
        background: #FF3671;
        width: 80%;
        height: 48%;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .div_alert .img_cod{
        width: 100px;
        height: 100px;
        display: inline-block;
        margin-top: .4rem;
    }
    .div_alert .p_title{
        color: #F8E71C;
        padding: .4rem 0 .4rem;
        font-size: .34rem;
        font-weight: 600;
    }
    .div_alert .p_text_cen{
        color: #fff;
        font-size: .34rem;
        font-weight: 600;
    }
    .div_but_a{
        font-size: .3rem;
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    .div_but_a a{
        display: inline-block;
        width: 50%;
        text-align: center;
        height: .8rem;
        line-height: .8rem;
        background: #FCF53C;
        color: #FE1364;
    }
    .div_but_a a:nth-of-type(1){
        background: #fff;
    }
    /*保存弹框*/
    .div_cod{
        background: #fff;
        height: 52%;
    }
    .div_cod .p_cod_titl{
        color: #4a4a4a;
        height: .68rem;
        line-height: .68rem;
        font-size: .3rem;
    }
    .div_cod .img_codes{
        width: 90%;
        margin:0 auto;
        display: inline-block;
    }
    .div_cod .p_a_sub{
       /*  position: absolute;
       bottom: 0;
       width: 100%; */
    }
    .div_cod .p_a_sub a{
        display: inline-block;
        width: 50%;
        height: .8rem;
        line-height: .8rem;
        font-size: .3rem;
        color: #007FFF;
    }
</style>