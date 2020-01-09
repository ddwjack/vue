<template>
    <section>
        <searchhed></searchhed>
        <div class="div_swi_top">
            <swiperHeade :Abanner="Tbanner"></swiperHeade>
        </div>
        <div class="list-title">
            <div class="list-title-l">
              <span style="color:#585858;font-size: 0.3rem"><i class="iconfont icon-zuirehotchunse" style="color:#ff7600;font-size: 0.32rem"></i>福利推荐</span>
            </div>
        </div>
        <section class="aui-grid aui-margin-b-15">
            <div class="aui-row" id="fl_list">
                <loaderGif v-if="isLoading"></loaderGif>
                <!-- <div class="aui-col-xs-3 pt-list" onclick="h5('http://m.kuaidi100.com/index.jsp')"> -->
                <router-link v-for="item in Alist" :key="item.id" :to="{path: 'Aiframe', query: {url: item.linkurl,'title':item.name }}" :data-v="item.name" tag="div" class="aui-col-xs-3 pt-list">
                    <i class="aui-iconfont"><img :src="item.picurl"/></i>
                    <div class="aui-grid-label">{{item.name}}</div>
                </router-link>
            </div>
        </section>
        <div class="div_over_hid" style="">
            <swiperHeade :Abanner="Bbanner"></swiperHeade>
        </div>
        <footerFixed></footerFixed>
    </section>
</template>

<script>
    import searchhed from '../components/Asearch'
    import footerFixed from '../components/footer'
    import swiperHeade from '../components/seiper'
    import loaderGif from '../components/loader'
    // import "../style/zhibo.css" 
    // import "../style/base.css"
export default {
    name: 'welfare',
    data () {
        return {
            Tbanner:[],
            Bbanner:[],
            Alist:[],
            isLoading:true
        }
    },
    created () {
    },
    mounted () {
        console.log(80)
        this.$ajax({
            method: 'get',
            url: `${this.baseUrl}app/nav/fl?uid=0`,
            dataType:'json',
            // headers:{'Content-Type':'http://localhost:8081/'},
        }).then((res) => {
            console.log(res)
            this.Tbanner = res.data.banner.data
            this.Bbanner = res.data.guanggao.data
            this.Alist = res.data.tu.data
            this.isLoading = false
            // console.log(res.data.banner.data)
        }).catch((res)=>{
            console.log('请求失败')
        })
    },
    methods: {
        
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
    
</style>