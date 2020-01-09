<template>
    <section class="wrapper col_fff">
        <searchhed></searchhed>
        <div class="div_swi_top">
            <swiperHeade></swiperHeade>
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
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.iqiyi.com/vip')">
                    <i class="aui-iconfont"><img src="../image/default_picture/iqiyi.png"/></i>
                    <div class="aui-grid-label">爱奇艺</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.v.qq.com/tv.html')">
                    <i class="aui-iconfont"><img src="../image/default_picture/tengxun.png"/></i>
                    <div class="aui-grid-label">腾讯视频</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://www.youku.com')">
                    <i class="aui-iconfont"><img src="../image/default_picture/youku.png"/></i>
                    <div class="aui-grid-label">优酷</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.mgtv.com/channel/home')">
                    <i class="aui-iconfont"><img src="../image/default_picture/mgtv.png"/></i>
                    <div class="aui-grid-label">芒果TV</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('https://m.tv.sohu.com')">
                    <i class="aui-iconfont"><img src="../image/default_picture/souhu.png"/></i>
                    <div class="aui-grid-label">搜狐视频</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.pptv.com/?location=m_home')">
                    <i class="aui-iconfont"><img src="../image/default_picture/pptv.png"/></i>
                    <div class="aui-grid-label">PPTV</div>
                </div>
                <div class="aui-col-xs-3 pt-list"tapmode onclick="wwLive('http://vip.1905.com/?fr=homeh5_menu_wow')">
                    <i class="aui-iconfont"><img src="../image/default_picture/m1905.png"/></i>
                    <div class="aui-grid-label">M1905</div>
                </div>

                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.le.com/tv')">
                    <i class="aui-iconfont"><img src="../image/default_picture/leshi.png"/></i>
                    <div class="aui-grid-label">乐视视频</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.miguvideo.com/mobiletv.jsp')">
                    <i class="aui-iconfont"><img src="../image/default_picture/migu.png"/></i>
                    <div class="aui-grid-label">咪咕影院</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('https://h5.kuaiyinshi.com')">
                    <i class="aui-iconfont"><img src="../image/ks.jpg"/></i>
                    <div class="aui-grid-label">快手</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.kuaikanmanhua.com/')">
                    <i class="aui-iconfont"><img src="../image/mh.jpg"/></i>
                    <div class="aui-grid-label">快看漫画</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.hanju.cc/')">
                    <i class="aui-iconfont"><img src="../image/hj.jpg"/></i>
                    <div class="aui-grid-label">韩剧TV</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('https://m.meijutt.com/')">
                    <i class="aui-iconfont"><img src="../image/mj.jpg"/></i>
                    <div class="aui-grid-label">天天美剧</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.yinyuetai.com/')">
                    <i class="aui-iconfont"><img src="../image/yyt.jpg"/></i>
                    <div class="aui-grid-label">音悦台</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('http://m.acfun.cn/')">
                    <i class="aui-iconfont"><img src="../image/acf.jpg"/></i>
                    <div class="aui-grid-label">ACFun</div>
                </div>
                <div class="aui-col-xs-3 pt-list" tapmode onclick="wwLive('https://m.bilibili.com/index.html')">
                    <i class="aui-iconfont"><img src="../image/bl.jpg"/></i>
                    <div class="aui-grid-label">哔哩哔哩</div>
                </div>
            </div>
        </section>
        <section class="sec_fix_fx padBott68">
            <div class="div_share">
                <img src="../image/share.png" alt="">
                <p class="p_but"><a onclick="Aerweima()" class="Aherf" href="javascript:void(0)">获取二维码</a></p>
                <p class="p_but"><a class="Aherf Aherf_two" onclick="copySetes()" id="Abtn2" href="javascript:void(0)">邀请好友</a></p>
            </div>
        </section>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
            // export const LoginURL = `/api/auth_token/`

    export default {
        name: 'home',
        data () {
            return {
                token:this.GLOBAL.token,//直接通过this访问全局变量。
            }
        },
        mounted(){
            console.log(this.GLOBAL.token)
    // console.log(const)
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
            console.log(this.qs.stringify(secretData))
            /*$.getJSON('http://example.com/data.php?callback=?,function(jsondata)'){
                //处理获得的json数据
            }*/
            /*this.$ajax({
                method: "post",
                url: "/list/login/login/share.html",
                params: {
                  name: this.name //传递的参数
                }
              }).then(res => { https://api.xtsdy.com
                        this.show();
              });*/
              console.log(this.baseUrl)
            this.$ajax({
                method: 'get',
                url: `${this.baseUrl}app/nav/fl?uid=0`,
                data: this.qs.stringify(secretData),
                dataType:'JSONP',
                // headers:{'Content-Type':'http://localhost:8081/'},
            }).then(function(res) {
                console.log(res)
            }).catch(function(err) {
                console.log(err)
            })
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
</style>