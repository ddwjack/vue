<template>
    <section class="wrapper">
        <header class="head_set margTopX" style="border:0;">
            <div class="div_hed">
                <p class="p_rgba"><i @click="$router.back(-1)" class="wholeFan" id="p_fan"></i></p>
            </div>
        </header>
        <div style="font-size: 0">
            <img class="w100" src="../images/channel/home1.png" alt="">
        </div>
        <!-- <div class="div_swi_top"> -->
        <!-- <swiperHeade></swiperHeade> -->
        <!-- </div> -->
        <homelist></homelist>
        <!-- <homelist v-if="testShow" :newsList="newsList[i]" ></homelist> -->
    </section>
</template>

<script>
// import footerFixed from '../components/footer'
// import swiperHeade from '../components/seiper'
import homelist from '../components/homelist'
export default {
    name: 'home',
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created() {
        
    },
    methods:{
        gosearch(id) {
            this.$router.push('/search/' + id)
            console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        }
    },
    components: {
        // swiperHeade,
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
        background: transparent;
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
    .div_hed .p_rgba{
        width: .6rem;
        height: .6rem;
        background: rgba(0,0,0,0.7);
        margin: 6px 0 0 4px;
        border-radius: 50%;
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
    .newsList {
        max-height: 100vh;
        overflow-y: auto;
    }
</style>