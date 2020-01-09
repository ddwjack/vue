<template>
    <section>
        <ul>
            <li>
                <!-- <a href="javascript:void(0)" :class="{activ: '/home' === $route.path}"  @click="gotoAddress('/home')" > -->
                <router-link tag="a" href="javascript:void(0)" :class="{activ: '/home' === $route.path}" to="/home">
                    <i class="i_icon n_home"></i>
                    <span>首页</span>
                </router-link>
                <!-- </a> -->
                <!-- <router-link :to="{path:'/HelloWorld'}" tag="a" class="buy_again" >再来一单</router-link> -->
            </li>
            <li>
                <!-- <a href="javascript:void(0)" :class="{activ: '/Featured' === $route.path}" @click = "gotoAddress('/Featured')" > -->
                <router-link tag="a" href="javascript:void(0)" :class="{activ: '/Featured' === $route.path}" to="/Featured">
                    <i class="i_icon n_xuan"></i>
                    <span>热门</span>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                <!-- <a href="javascript:void(0)" :class="{activ: '/Find' === $route.path}" @click = "gotoAddress('/Find')" > -->
                <router-link tag="a" href="javascript:void(0)" :class="{activ: '/Find' === $route.path}" to="/Find">
                    <i class="i_icon n_xian"></i>
                    <span>片库</span>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                <!-- <a href="javascript:void(0)" :class="{activ: '/welfare' === $route.path}" @click = "gotoAddress('/welfare')" > -->
                <router-link tag="a" href="javascript:void(0)" :class="{activ: '/welfare' === $route.path}" to="/welfare">
                    <i class="i_icon n_fuli"></i>
                    <span>福利</span>
                </router-link>
                <!-- </a> -->
            </li>
            <li>
                <!-- <a href="javascript:void(0)" :class="{activ: '/usercenter' === $route.path}" @click = "gotoAddress('/usercenter')" > -->
                <router-link tag="a" href="javascript:void(0)" :class="{activ: '/usercenter' === $route.path}" to="/usercenter">
                    <i class="i_icon n_page"></i>
                    <span>我的</span>
                </router-link>
                <!-- </a> -->
            </li>
        </ul>
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
    },
    methods: {
        gotoAddress(path){
            this.$router.push(path)
        }
    },
}
</script>
<style scoped>
    ul{position: fixed;background: #FAFAFA;display: flex;width: 100%;bottom: 0;height: 1.12rem;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.25);}
    li{flex: 1;font-size: .3rem;text-align: center;}
    li a{display: block;height: 100%;color:#543e3e; }
    li .i_icon{display: inline-block;width:.56rem;height:.56rem;margin-top: .1rem}
    li .n_home{background: url(../images/icon/nav_icon_sy_d.png);background-size: 100% 100%;}
    li .n_xuan{background: url(../images/icon/kdsp_icon_fx0.png);background-size: 100% 100%;}
    li .n_xian{background: url(../images/icon/zb.png);background-size: 100% 100%;}
    li .n_fuli{background: url(../images/icon/nav_icon_pd_d.png);background-size: 100% 100%;}
    li .n_page{background: url(../images/icon/nav_icon_user_d.png);background-size: 100% 100%;}
    li .activ .n_home{background: url(../images/icon/nav_icon_sy.png);background-size: 100% 100%;}
    li .activ .n_xuan{background: url(../images/icon/kdsp_icon_fx.png);background-size: 100% 100%;}
    li .activ .n_xian{background: url(../images/icon/zb2.png);background-size: 100% 100%;}
    li .activ .n_fuli{background: url(../images/icon/nav_icon_pd.png);background-size: 100% 100%;}
    li .activ .n_page{background: url(../images/icon/nav_icon_user.png);background-size: 100% 100%;}

    li .activ span{color: #f52737;}

    li span{display: block;margin-top: -.12rem;} 
</style>