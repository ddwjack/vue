<template>
    <section>
        <div class="home_myTripList_bg" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }">
            <mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <!-- // 这里是你的列表视图 -->
                  <div class="myTripList_bg" v-for="item in itemList" @click="goPage(item.trans_id)"><img class="w100" v-lazy="item"  alt=""></div>
                <!-- // 上面这段是你要循环的列表 ul也行，刚写了两天控件都不是很会，就会使用的div -->
            </mt-loadmore>
        </div>
        <footerFixed></footerFixed>
  </section>
</template>

<script>
import footerFixed from '../components/footer'
export default {
    name: 'home',
    data () {
        return {
            start_address: '',
            end_address: '',
            trans_time: '',
            status: '',
            trans_id: '',
            itemList: [],
            end_longitude: '',
            end_latitude: '',
            amount: '',
            netcar_type: '',
            provider: '',
            //上面是页面显示的参数 
            allLoaded: false, // 可以进行上拉
            isAutoFill: false, // 是否自动触发上拉函数
            wrapperHeight: 0,
            courrentPage: 1
        }
    },
    created () {
        this.loadFrist()
    },
    mounted () {
        
    },
    methods: {
        //   跳转详情
        goPage(trans_id) {
          // this.$router.push({name: 'myTripListDetail', params:{ id: trans_id}})
        },
        //   下拉刷新
        loadTop () {
          this.loadFrist()
        },
        // 下来刷新加载
        loadFrist() {
            // 修改为新的ajax调用方式
            console.log(56)
            /*var postData ={
                channel:this.GLOBAL.zdid,
                app_key:this.GLOBAL.appkey,
                user_id:this.GLOBAL.meId,
                version:this.GLOBAL.version,
                client:'ios',
                enclosure_id:''
            }
            // console.log(postData)
            var secretData = {
              'info' : this.Decrypt.encrypt(postData)
            };
          let _this = this
          let sid = this.$route.params.sessionId
          _this.courrentPage = 1
            this.$ajax({
                method: 'post',
                url: this.GLOBAL.localSite+'/live/enclosure_image',
                data: this.qs.stringify(secretData),
            }).then(function(res) {
                const info = JSON.parse(_this.Decrypt.crypt(res.data.result))
                console.log(info)
                _this.itemList = info
                _this.allLoaded = false // 可以进行上拉
                _this.$refs.loadmore.onTopLoaded()
            })*/
        },
    },
    components: {
        footerFixed,
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