<template>
    <section class="padTopX" style="background: #f5f5f5;">
        <titleHed text="常见问题"></titleHed>
        <div class="aui-card-list_jia div_swi_top">
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>怎么看VIP视频？</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
                1.首页点击对应平台→选择想看的视频→等待视频连接成功的提示后点击播放即可
                <br><br>
                如下图：
                <img src="../image/app/changjianwenti_bofang.jpg">
            </div>
        </div>
        <div></div>
        <div class="aui-card-list_jia" >
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>播放失败怎么办？</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
              点击页面右上角的【更换线路】；<br>
              我们准备了9条线路供选择！
            </div>
        </div>
        <div class="aui-card-list_jia" >
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>如何升级会员</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
                在会员中心点击【会员升级】，在页面中购买激活码（或者联系专属客服购买）后，在上方输入即可开通
                <br><br>
                如下图：
                <img src="../image/app/changjianwenti_shengji.jpg">
            </div>
        </div>
        <div class="aui-card-list_jia">
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>如何获取积分</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
              在会员中心点击【获取积分】，获取二维码或邀请链接分享给好友，好友通过链接注册后即可获得积分；
              积分可以用来兑换会员！
            </div>
        </div>
        <div class="aui-card-list_jia">
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>播放时跳转官方软件怎么办</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
              遇到这种情况，请先删除掉对应的官方软件即可 
            </div>
        </div>
        <div class="aui-card-list_jia">
            <div class="aui-card-list-header aui-card-list-user aui-border-b">
                <div class="aui-card-list-user-avatar">
                    <img src="../image/app/molisos.png" class="aui-img-round" />
                </div>
                <div class="aui-card-list-user-name">
                    <div>为什么部分电影播放不了</div>
                </div>
                <div class="aui-card-list-user-info">北京朝阳</div>
            </div>
            <div class="aui-card-list-content-padded">
              请尝试使用其他线路播放，如还无法播放，请联系客服，进行及时更新。
            </div>
        </div>
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    // import "../style/all.css"

export default {
    name: 'helpwin',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    mounted(){
        /*openWin(url){

        }*/
    },
    methods:{
        AtoLogin(){
            // this.$router.push({name: 'money'})
            this.$router.push({name: 'money'})
        },
        /*openWin(){
            console.log(126)
        }*/
    },
    components: {
        titleHed,
    },
}
</script>
<style scoped>
    .aui-card-list_jia{
        background: #fff;
        border-bottom: 10px solid #f5f5f5;
    }
    .aui-card-list_jia .aui-card-list-header.aui-card-list-user{
        border-bottom: 1px solid #dddddd;
    }
</style>