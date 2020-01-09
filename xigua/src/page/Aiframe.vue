<template>
    <section class="padTopX" style="width: 100%;height: 100%;">
        <titleHed :text="title"></titleHed>
        <!-- <p v-html="html"></p> -->
            <loaderGif v-if="isLoading"></loaderGif>

        <div style="height:100vh;margin-top: 1rem;" class="">
            <iframe ref="iframe" id="shoWiframe" frameborder="0" scrolling="auto" style="" :src='txet' @load="loader()"></iframe>
         <!-- <iframe name="container_ifranme" id="iframeId" scrolling="no" frameborder="no" border="0" :src="text" @load="loader()" ></iframe> -->
        </div> 
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    import loaderGif from '../components/loader'
    // import "../style/myui.css"
export default {
    name: 'Aiframe',
    data () {
        return {
            txet:this.$route.query.url,
            title: this.$route.query.title,
            isLoading:true
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        function changeMobsfIframe() {
            const mobsf = document.getElementById('shoWiframe')
            const deviceWidth = document.body.clientWidth
            const deviceHeight = document.body.clientHeight
            mobsf.style.width = (Number(deviceWidth)) + 'px' // 数字是页面布局宽度差值
            mobsf.style.height = Number(deviceHeight)  + 'px' // 数字是页面布局高度差
        }
     
        changeMobsfIframe()
     
        window.onresize = function() {
            changeMobsfIframe()
        }
    },
    activated(){
        this.txet = this.$route.query.url
        this.title = this.$route.query.title
        this.isLoading = true
    },
    methods: {
        loader(){
            this.isLoading = false
            // var mainFrame=document.getElementById('shoWiframe');
            // console.log(mainFrame.contentWindow.document.title)
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
   #shoWiframe{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        overflow-y: hidden;
    }
</style>