<template>
    <section class="wrapper">
        <!-- <p><img class="w100" :src="newsList" alt="图片开小差啦"></p> -->
        <div class="div_pad_to">
            <ul class="w100">
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
                <li class="li_img_list">
                    <img class="w100" src="../images/channel/home1.png" alt="">
                    <p class="center overhidden">视频名称</p>
                </li>
            </ul>
        </div>
        <!-- <footerFixed></footerFixed> -->
    </section>
</template>

<script>
// import footerFixed from '../components/footer'
export default {
    name: "homelist",
    /*props: {
        message: ['newsList'] //定义传值的类型<br>  }
    },*/
    props: ['newsList'],
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created(){
        console.log(25)
    },
    mounted(){
        console.log(27)
    },
    methods:{
       /* gosearch(id) {
            // this.$router.push('/search/' + id)
            // console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        },*/
    },
    components: {
        // footerFixed,
    },
}
</script>
<style scoped>
    .div_pad_to{
        background: #fff;
        padding:.2rem .32rem 0;
    }
    .li_img_list{
        position: relative;
        display: inline-block;
        width: 48%;
        margin-right: 4%;
        margin-bottom: .2rem;
        border-radius: 5px;
        overflow: hidden;
    }
    .li_img_list:nth-of-type(2n+0){
        margin-right: 0;
    }
    .li_img_list p{
        position: absolute;
        bottom: 0;
        width: 88%;
        color: #fff;
        padding:0 .2rem;
        font-size: .3rem;
        height: .88rem;
        line-height: .88rem;
        background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
    }
</style>