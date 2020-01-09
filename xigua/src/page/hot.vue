<template>
    <section class="wrapper">
        <titleHed text="热门电影"></titleHed>
        <div class="head_div_da" style="padding-top: 1rem;">
            <div class="div_dow">
                <ul>
                    <li class="li_img">
                        <img src="../images/xigua/ziyuan-2.png" alt="">
                    </li>
                    <li class="li_text">
                        <p class="p_top">最新电影 最多好剧 最热综艺 最全动漫</p>
                        <p class="p_bot">高清流畅无广告  永久免费</p>
                    </li>
                    <li class="li_down"><a onclick="downshow()" href="javascript:void(0)">下载</a></li>
                </ul>
            </div>
        </div>
        <loaderGif v-if="isLoading"></loaderGif>
        <div class="wrap">
            <div class="game-page">
                <div class="" id="liveList" style="padding-top:10px;">
                    <ul class="clearfix" id="div_list">
                        <li class="li_fmTwo" onclick="">
                            <div class="video-mask-box">
                                <ul class="ul_fons">
                                    <li class="li_w32" v-for="(item,index) in Adata" @click="FopenWin(item.url)" ref="Fdeta">
                                        <img :src="item.img" alt="" class="game-pic">
                                        <p class="p_name">{{item.title}}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import titleHed from '../components/titleHed'
import loaderGif from '../components/loader'
import "../style/base.css"
import "../style/zhibo.css"

// import homelist from '../components/homelist'
export default {
    name: 'home',
    data () {
        return {
            isLoading:true,
            Adata:[]
        }
    },
    created() {
        
    },
    mounted(){
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}login/login/vlist.html`,
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
    methods:{
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
        loaderGif,
        titleHed
        // 'homelist': homelist
    },
}
</script>
<style scoped>
    
</style>