<template>
    <section class="padTopX">
        <titleHed text="游戏直播"></titleHed>
        <!-- <p v-html="html"></p> -->
        <loaderGif v-if="isLoading"></loaderGif>
        <div class="tab-panel-item tab-active div_swi_top">
            <div class="tab-item">
                <a class="aui-flex b-line">
                    <div class="aui-flex-iphone">
                        <img src="../image/app/game.png" alt="">
                    </div>
                    <div class="aui-flex-box">
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
        <div class="game-list-wrap-zhubo" id="liveList">
            <ul class="clearfix" id="div_list">
                <!-- <li v-for="item in data" @click="openWin('shuds')" :data-v="item.video"> -->
                <li v-for="item in data" @click="LopenWin(item.video)" :data-v="item.video">
                    <div class="game-a">
                        <img :src="item.img" alt="">
                        <em class="aui-group-three overHidden" style=" font-size: 12px; "> {{item.name}}</em>
                        <p>
                            <em class="aui-group-one" style="font-size: 12px; ">主播：</em> <em class="aui-group-two" style=" font-size: 12px; ">{{item.nickname}}</em>
                        </p><br>
                    </div>
                </li>
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
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        var values = {
            lx: 'hqzb',
            id: this.txet,
            ys:1
        }
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}api/gamezhibo.php`,
            params:values,
            dataType:'json',
        }).then((res) => {
            console.log(res)
            this.data = res.data
            this.isLoading = false
        }).catch((res)=>{
            console.log('请求失败')
            this.isLoading = false
        })
    },
    methods: {
        LopenWin(name){
            console.log(name)
            this.$router.push({name: 'tvplay', params:{ id:'http://alhls.cdn.zhanqi.tv/zqlive/'+name+'.m3u8'}})
        },
        baocuo(){
            this.AalertMsg('此功能暂未开放')    
        },
        AalertMsg(title){
            this.isLoading=false
            this.$toast({message: title,position: 'bottom',duration: 2000});
        }
    },
    components: {
        titleHed,
        loaderGif
    },
}
</script>
<style scoped>
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