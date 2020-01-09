<template>
    <section class="padTopX">
        <searchhed></searchhed>
        <div class="head_div_da div_swi_top">
            <div class="div_dow">
                <ul>
                    <li class="li_img">
                        <img src="../images/xigua/ziyuan-2.png" alt="">
                    </li>
                    <li class="li_text">
                        <p class="p_top">最新电影 最多好剧 最热综艺 最全动漫</p>
                        <p class="p_bot">高清流畅无广告  永久免费</p>
                    </li>
                    <li class="li_down"><a href="javascript:void(0)">下载</a></li>
                </ul>
            </div>
        </div>
        <div class="">
            <swiperHeade :Abanner="Abanner"></swiperHeade>
        </div>

        <div class="v-list-wrap" id="liveList">
            <loaderGif v-if="isLoading"></loaderGif>
            <ul class="clearfix" id="div_list">
                <li v-for="item in Adata" @click="FopenWin(item.url)" style="font-size: 0;">
                    <div class="video-mask-box">
                        <img :src="item.img" alt="" class="game-pic">
                    </div>
                    <em class="aui-group-three" style=" font-size: 12px; "> {{item.title}}</em>
                </li>
            </ul>
        </div>
        <div class="wrap" style="display: none;">
            <div class="game-page">
              <!-- 视频列表 -->
                <div class="" id="liveList">
                    <ul class="clearfix padBott68" id="div_list">
                        <li class="li_fmTwo" onclick="">
                            <!-- <loaderGif v-if="isLoading"></loaderGif> -->
                            <h3><img class="img_icon" src="../images/xigua/iconTj.png" alt="">最火最热 <span class="span_fr">更多<img src="../images/xigua/22.png" alt=""> </span></h3>
                            <div class="video-mask-box">
                                <ul class="ul_fons">
                                    <li @click="godetail('名字','9.8','2035播放量','类型','导演')" ref="Fdeta" data-g="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" data-x="描述" data-y="演员" class="li_w32">
                                        <span class="sp_top_ty">国产</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">影片名称</p>
                                        <p class="textar">影片描述</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">国产</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">影片名称</p>
                                        <p class="textar">影片描述</p>
                                    </li>
                                    <li class="li_w32">
                                        <span class="sp_top_ty">国产</span>
                                        <img src="https://img.xtsdy.com/upload/vod/20191024/a1aaabea1946eabc4b8c09f84fd46491.jpg" alt="">
                                        <span class="span_fen">9.8分</span>
                                        <p class="p_name">影片名称</p>
                                        <p class="textar">影片描述</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footerFixed></footerFixed>
  </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
    import loaderGif from '../components/loader'
    import "../style/zhibo.css"
    import "../style/base.css"
export default {
    name: 'find',
    data () {
        return {
            isLoading:true,
            Abanner:[],
            Adata:[]
        }
    },
    created () {
    },
    mounted () {
        // this.isLoading = false
        console.log(313)
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}app/nav/index?uid=0`,
            dataType:'json',
            // headers:{'Content-Type':'http://localhost:8081/'},
        }).then((res) => {
            // console.log(res)
            this.Abanner = res.data.banne.data
            // console.log(res.data.banner.data)
        }).catch((res)=>{
            console.log('请求失败')
        })
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}login/login/mnlist.html`,
            dataType:'json',
            // headers:{'Content-Type':'http://localhost:8081/'},
        }).then((res) => {
            console.log(res)
            if (res.data.code == '1') {
                console.log(res.data.msg)
                this.Adata = res.data.msg
                this.isLoading = false
            }else if(res.data.code == '0'){
                alert(res.data.msg)
            }
            // this.Abanner = res.data.banne.data
            // console.log(res.data.banner.data)
        }).catch((res)=>{
            console.log('请求失败')
        })
    },
    methods: {
        FopenWin(name){
            var time = localStorage.getItem('user_time');
            var user_id = localStorage.getItem('user_id');
            var username = localStorage.getItem('user_name');
            var timestamp = Date.parse(new Date())/1000;
            //判断是否登录
            if(user_id==0){
                this.AalertMsg('亲爱的，你还没有登录哦！')
                // 去登陆 
                this.$router.push({name: 'login', params:{ id: ''}})
                return;
            }
            //判断是否会员
            if (time>timestamp || time == -1) {
                //网络连接判断S
                this.$router.push({name: 'tvplay', params:{ id: name}})
            //网络连接判断E
            }else if (time<timestamp){
                this.AalertMsg('会员已过期') //会员过期弹窗提示
            }
        },
        AalertMsg(title){
            this.isLoading=false
            this.$toast({message: title,position: 'bottom',duration: 2000});
        }
        /*godetail(nm,sco,play,clas,director){
            // let thisX = this.$refs.Fdeta.dataset.x
            // let thisG = this.$refs.Fdeta.dataset.g
            // this.$router.push({name: 'videodetail', params:{id:nm,score:sco,}})
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
        footerFixed,
        swiperHeade,
        searchhed,
        loaderGif
    },
}
</script>
<style scoped>
    /*头部搜索*/
    .home_myTripList_bg {
    /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
    overflow: scroll;
  }
</style>