<template>
    <section class="padTopX" style="width: 100%;height: 100%;">
        <titleHed :text="title"></titleHed>
        <!-- <p v-html="html"></p> -->
        <div style="height:100vh;" class="div_swi_top">
            <iframe ref="iframe" id="shoWiframe" frameborder="0" scrolling="auto" style="" :src='txet' @load="loader()"></iframe>
         <!-- <iframe name="container_ifranme" id="iframeId" scrolling="no" frameborder="no" border="0" :src="text" @load="loader()" ></iframe> -->
        </div> 
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    // import "../style/myui.css"
export default {
    name: 'home',
    data () {
        return {
            txet:this.$route.query.url,
            title: this.$route.query.title
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

        // console.log(this.$refs.iframe)
        // 这里就拿到了iframe的window对象
        // console.log(this.$refs.iframe.contentWindow)
        /*const oIframe = document.getElementById('shoWiframe');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.height = (Number(deviceHeight)+100) + 'px'; //数字是页面布局高度差，其中的100可以根据自己的界面进行调整*/
    },
    methods: {
        loader(){
            console.log(35)
            // console.log(this.$refs.iframe)
            // 这里就拿到了iframe的window对象
            // console.log(this.$refs.iframe.contentWindow)
            // console.log(ifm.currentTarget.firstElementChild)

            // console.log(ifm.contentDocument)
            /*console.log(document.getElementById('shoWiframe'))
            var ifm= document.getElementById("shoWiframe");
            console.log(ifm)
            console.log(ifm.contentWindow)*/
            // var subWeb = document.frames ? document.frames["shoWiframe"].document : ifm.contentDocument;
            /*if(ifm != null && subWeb != null) {
                console.log(40)
                    ifm.style.height = 'auto';//关键这一句，先取消掉之前iframe设置的高度
                    ifm.style.height = subWeb.body.scrollHeight+'px';
            }else{
                ifm.style.height = 'auto';//关键这一句，先取消掉之前iframe设置的高度
                console.log(subWeb)
                ifm.style.height = subWeb.body.scrollHeight+'px';
                console.log(46)
           }*/
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
       titleHed
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