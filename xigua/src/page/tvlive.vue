<template>
    <section class="padTopX">
        <titleHed :text="title"></titleHed>
        <!-- <p v-html="html"></p> -->
        <loaderGif v-if="isLoading"></loaderGif>
        <div class="tab-panel-item tab-active div_swi_top">
            <div class="tab-item">
                <a class="aui-flex b-line">
                    <div class="aui-flex-iphone">
                        <img src="../image/app/tv.png" alt="">
                    </div>
                    <div class="aui-flex-box" v-if="title==='电视直播'">
                        <p>
                            <em class="aui-group-three" style=" font-size: .28rem; "> 全国电视直播</em>
                        </p>
                        <h3 style=" font-size: 10px; ">在线收看高清CCTV、地方卫视</h3>
                        <p>
                            <em class="aui-group-one" style=" font-size: 12px; ">实时更新</em> <em class="aui-group-two" style=" font-size: 12px; ">电视TV</em>
                        </p>
                    </div>
                    <div class="aui-flex-box" v-else>
                        <p>
                            <em class="aui-group-three" style=" font-size: .28rem; "> 游戏在线直播</em>
                        </p>
                        <h3 style=" font-size: 10px; ">各类游戏 海量主播</h3>
                        <p>
                            <em class="aui-group-one" style=" font-size: 12px; ">实时更新</em> <em class="aui-group-two" style=" font-size: 12px; ">知名主播</em>
                        </p>
                    </div> 
                    <div class="aui-flex-support" style=" font-size: 12px; " @click="baocuo()"  >报错</div>
                </a>
            </div>
        </div>
        <div class="">
            <a v-for="(item,index) in data" @click="openWin(item.url)" class="aui-class-list-item">
                <div class="aui-cell-fl">
                    <img :src="item.img" alt="">
                </div>
                <div class="aui-cell-fr">{{item.title}}</div>
                <div class="aui-cell-tr"></div>
            </a>
        </div>
        <div class="game-list-wrap" id="gameList" style=" background: #ffffff; ">
            <ul class="clearfix" id="div_list">
                <!-- <li v-for="item in dataTwo" :data-d="item.id" :to=""> -->
                <router-link v-for="item in dataTwo" :key="index" :to="{path: 'liveList', query: {id:item.id}}" tag="li">
                    <div class="game-a">
                        <img :src="item.img" alt="">
                        <p class="game-list-name">{{item.name}}</p>
                    </div>
                </router-link>
            </ul>
        </div>
    </section>
</template>

<script>
    import loaderGif from '../components/loader'
    import titleHed from '../components/titleHed'
    import "../style/myui.css"
export default {
    name: 'tvlive',
    data () {
        return {
            txet:this.$route.query.id,
            title:this.$route.query.title,
            isLoading: true,
            data: [],
            dataTwo:[]
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        if (this.txet == '1') {
            this.$ajax({
                method: 'get',
                url: `${this.baseUrl}login/login/tvlist.html`,
                dataType:'json',
            }).then((res) => {
                // console.log(res.data.msg)
                this.data = res.data.msg
                this.isLoading = false
            }).catch((res)=>{
                console.log('请求失败')
                this.isLoading = false
            })
        }else{
            var values = {
                lx: 'hqpt',
                ys:1
            }
            this.$ajax({
                method: 'get',
                url: `${this.baseUrl}api/gamezhibo.php`,
                params:values,
                dataType:'json',
            }).then((res) => {
                // console.log(res.data)
                this.dataTwo = res.data
                this.isLoading = false
            }).catch((res)=>{
                console.log('请求失败')
                this.isLoading = false
            })
        }
    },
    methods: {
        openWin(name){
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
        baocuo(){
            this.AalertMsg('此功能暂未开放')    
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
        titleHed,
        loaderGif
    },
}
</script>
<style scoped>
    /* .aui-tabBar-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 49;
    }
    
    .aui-class-list-title {
        padding: 5px 15px;
        background: #f2efee;
        width: 100%;
        position: relative;
        font-size: 0.7rem;
    }
    
    .aui-class-list-title:before {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-top: 1px solid #e1e0de;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
    }
    
    .aui-class-list-title:after {
        content: '';
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e1e0de;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
    } */

    .aui-class-list-item {
        padding: 0 15px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 50%;
        float: left;
        position: relative;
        z-index: 0;
        font-size: 0.28rem;
        height: 62px;
    }

    .aui-class-list-item:before {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        right: 0;
        height: 100%;
        border-right: 1px solid #D9D9D9;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
        -webkit-transform-origin: 100% 0;
        transform-origin: 100% 0;
    }

    .aui-class-list-item:after {
        content: '';
        position: absolute;
        z-index: 2;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #e1e0de;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
    }

    .aui-class-list-box {
        background: #fff;
        overflow: hidden;
    }

    .aui-cell-fl img {
        width: 40px;
        margin-right: 15px;
        display: block;
        border: none;
    }

    .aui-cell-fr {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        color: #333;
        font-size: 0.3rem;
    }

    .aui-cell-tr {
        padding-right: 13px;
        position: relative;
    }

    .aui-cell-tr:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: relative;
        top: -2px;
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 0;
        border-radius: 1px;
    }
</style>