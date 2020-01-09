<template>
    <section class="wrapper">
        <header class="head_set margTopX" style="border:0;">
            <div class="div_hed">
                <p><i @click="$router.back(-1)" class="wholeFan" id="p_fan"></i>VIP分类详情页</p>
            </div>
        </header>
        <div class="div_tit_list">
            <ul class="claslist">
                <li class="li active">全部</li>
                <li class="li">分类1</li>
                <li class="li">分类2</li>
                <li class="li">分类3</li>
                <li class="li">分类4</li>
                <li class="li">分类5</li>
                <li class="li">分类5</li>
                <li class="li">分类5</li>
                <li class="li">分类5</li>
            </ul>
        </div>
        <!-- <homelist></homelist> -->
        <!-- <homelist v-if="testShow" :newsList="newsList[i]" ></homelist> -->
        <div>
            <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="isMoreLoading"
                infinite-scroll-distance="10"
                :infinite-scroll-immediate-check="true"
                class="newsList">
                <homelist ></homelist>
                <!-- <homelist v-if="testShow" :newsList="newsList[i]" ></homelist> -->
                <!-- <li v-for="(item,index) in newsList" v-model="newsList"><img class="w100" :src="item" alt=""></li> -->
             </ul>
             <div class="loading-box tc" v-if="isLoading">
                <mt-spinner type="snake" class="loading-more"></mt-spinner>
                <span class="loading-more-txt">加载中...</span>
             </div>
             <div class="no-more" v-if="noMore">没有更多了~</div>
        </div>

    </section>
</template>

<script>
// import footerFixed from '../components/footer'

import homelist from '../components/homelist'
export default {
    name: 'home',
    data () {
        return {
            newsList : [],
            moreList : [],
            i : 0,
            isMoreLoading: false, // 加载更多中
            isLoading : false,
            noMore : false,
            testShow:false
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created() {
        let postData ={
            channel:this.GLOBAL.zdid,
            app_key:this.GLOBAL.appkey,
            user_id:this.GLOBAL.meId,
            version:this.GLOBAL.version,
            client:'ios',
            enclosure_id:''
        }
        console.log(postData)
        let secretData = {
          'info' : this.Decrypt.encrypt(postData)
        };
        let _vm = this; 
        let i = 0;
        _vm.$ajax({
            method: 'post',
            url: _vm.GLOBAL.localSite+'/live/enclosure_image',
            data: _vm.qs.stringify(secretData),
        }).then(function(res) {
            // console.log(res.data.result)
            const info = JSON.parse(_vm.Decrypt.crypt(res.data.result))
            console.log(info)
            _vm.newsList = info.slice(i * 5 , (i + 1) * 5);
            _vm.testShow = true
            // console.log(_vm.newsList[i])
            // console.log(_vm.newsList.value)
        }).catch(function(error) {
            console.info(error)
        });
    },
    methods:{
        gosearch(id) {
            this.$router.push('/search/' + id)
            console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        },
        loadMore() {
            console.log(91)
            this.isMoreLoading = true;
            this.isLoading = true;
            this.noMore = false;
            let postData ={
                channel:this.GLOBAL.zdid,
                app_key:this.GLOBAL.appkey,
                user_id:this.GLOBAL.meId,
                version:this.GLOBAL.version,
                client:'ios',
                enclosure_id:''
            }
            console.log(postData)
            let secretData = {
              'info' : this.Decrypt.encrypt(postData)
            };
            setTimeout(() => {
                var _vm = this;
                _vm.$ajax({
                    method: 'post',
                    url: _vm.GLOBAL.localSite+'/live/enclosure_image',
                    data: _vm.qs.stringify(secretData),
                }).then(function(res) {
                    // console.log(res.data.result)
                    const info = JSON.parse(_vm.Decrypt.crypt(res.data.result))
                    console.log(info)
                     _vm.i ++;
                    _vm.moreList = info.slice(_vm.i * 5 , (_vm.i + 1) * 5);
                    if(_vm.moreList.length == 0){
                        _vm.noMore = true;
                        _vm.isLoading = false;
                    }else{
                        _vm.isLoading = false;
                        _vm.moreList.forEach(function(item){
                        _vm.newsList.push(item);
                        })
                    }
                }).catch(function(error) {
                    console.info(error)
                });

                /*_vm.axios.post().then(function(response) {
                    console.log(response.data);
                    _vm.i ++;
                    _vm.moreList = response.data.slice(_vm.i * 5 , (_vm.i + 1) * 5);
                    if(_vm.moreList.length == 0){
                        _vm.noMore = true;
                        _vm.isLoading = false;
                    }else{
                        _vm.isLoading = false;
                        _vm.moreList.forEach(function(item){
                        _vm.newsList.push(item);
                        })
                    }
                }).catch(function(error) {
                    console.info(error)
                });*/
                this.noMore = false;
                this.isMoreLoading = false;
            }, 1000);
        }
    },
    components: {
        homelist,
        // 'homelist': homelist
    },
}
</script>
<style scoped>
    /*头部导航条*/
    .head_set {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 9;
        background: linear-gradient(90deg,rgba(144,19,254,1) 0%,rgba(113,210,255,1) 100%);
        height: .88rem;
        line-height: .88rem;
        margin-bottom: .36rem;
        /* border-bottom: 1px solid #ececec; */
    }
    .div_hed {
        color: #fff;
        text-align: center;
        font-size: .32rem;
        /* font-weight: 600; */
    }
    .div_hed #p_fan {
        position: absolute;
        top: 50%;
        left: 6%;
        background: url(../images/room/leftfff.png);
        background-size: 100% 100%;
        width: .4rem;
        height: .4rem;
        transform: translate(-50%,-50%);
    }
    #p_fan:after {
        content: '';
        position: absolute;
        width: .8rem;
        height: .8rem;
        top: -.2rem;
        left: -.24rem;
    }

    /**/
    .div_tit_list{
        padding:0 .32rem;
        overflow: hidden;
        background: #fff;
        border-bottom:1px solid rgba(0,0,0,0.25);
    }
    .claslist{
        width: 100%;
        margin-top: .88rem;
        height: .88rem;
        line-height: .88rem;
        white-space: nowrap;
        overflow-x: scroll;
        float: left;
        overflow-y: hidden;
    }
    .claslist .li{
        font-size: .3rem;
        width: 1.28rem;
        height: .5rem;
        line-height: .5rem;
        background: #F0F2F5;
        text-align: center;
        border-radius: 30px;
        margin-right: .12rem;
        display: inline-block;
        vertical-align: middle;
    }
    .claslist .active{
        background: #C86DD7;
        color: #fff;
    }

    /**/
    .newsList {
        max-height: 100vh;
        overflow-y: auto;
    }
</style>