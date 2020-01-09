<template>
    <section>
        <ul>
            <li>
                <a href="javascript:void(0)" :class="{activ: '/' === $route.path}"  @click="gotoAddress('/')" >
                    <i class="i_icon n_home"></i>
                    <span>视频</span>
                </a>
                <!-- <router-link :to="{path:'/HelloWorld'}" tag="a" class="buy_again" >再来一单</router-link> -->
            </li>
            <li>
                <a href="javascript:void(0)" :class="{activ: '/Featured' === $route.path}" @click = "gotoAddress('/Featured')" >
                    <i class="i_icon n_xuan"></i>
                    <span>精选</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" :class="{activ: '/Find' === $route.path}" @click = "gotoAddress('/Find')" >
                    <i class="i_icon n_xian"></i>
                    <span>发现</span>
                </a>
            </li>
            <li>
                <a href="javascript:void(0)" :class="{activ: '/usercenter' === $route.path}" @click = "gotoAddress('/usercenter')" >
                    <i class="i_icon n_page"></i>
                    <span>我的</span>
                </a>
            </li>
        </ul>
        <!-- <section @click = "gotoAddress({path: '/msite', query: {geohash}})" class="guide_item">
            <span>外卖</span>
        </section>
        <section @click = "gotoAddress({path: `/search/${geohash}`})" class="guide_item">
            <span>搜索</span>
        </section>
        <section @click = "gotoAddress('/order')" class="guide_item">
            <span>订单</span>
        </section>
        <section @click = "gotoAddress('/profile')" class="guide_item">
            <span>我的</span>
        </section> -->
    </section>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    mounted(){
        console.log()
    },
    methods: {
        gotoAddress(path){
            this.$router.push(path)
        }
    },
}
</script>
<style scoped>
    ul{position: fixed;background: #FAFAFA;display: flex;width: 100%;bottom: 0;height: 1rem;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.25);}
    li{flex: 1;font-size: .2rem;text-align: center;}
    li a{display: block;height: 100%;}
    li .i_icon{display: inline-block;width:.64rem;height:.64rem;}
    li .n_home{background: url(../images/icon/nav_icon_sy_d.png);background-size: 100% 100%;}
    li .n_xuan{background: url(../images/icon/kdsp_icon_fx0.png);background-size: 100% 100%;}
    li .n_xian{background: url(../images/icon/nav_icon_pd_d.png);background-size: 100% 100%;}
    li .n_page{background: url(../images/icon/nav_icon_user_d.png);background-size: 100% 100%;}
    li .activ .n_home{background: url(../images/icon/nav_icon_sy.png);background-size: 100% 100%;}
    li .activ .n_xuan{background: url(../images/icon/kdsp_icon_fx.png);background-size: 100% 100%;}
    li .activ .n_xian{background: url(../images/icon/nav_icon_pd.png);background-size: 100% 100%;}
    li .activ .n_page{background: url(../images/icon/nav_icon_user.png);background-size: 100% 100%;}
    li span{display: block;margin-top: -.12rem;}
</style>