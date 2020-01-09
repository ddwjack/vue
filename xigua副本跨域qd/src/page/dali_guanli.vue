<template>
    <section class="padTopX">
        <titleHed text="代理管理"></titleHed>
        <!-- <p v-html="html"></p> -->
        <div style="height:100vh;">
            <iframe id="show-iframe" frameborder="0" scrolling="yes" style="background-color:transparent; position：absolute;width: 100%;
         height:100%; top: 0;left:0;bottom:0;" :src='txet'></iframe>
        </div> 
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    import "../style/myui.css"
export default {
    name: 'home',
    data () {
        return {
            txet:this.$route.query.url,
            loading: false,
            html: ''
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        this.load(this.txet)
        /*const oIframe = document.getElementById('show-iframe');
        const deviceWidth = document.documentElement.clientWidth;
        const deviceHeight = document.documentElement.clientHeight;
        oIframe.style.height = (Number(deviceHeight)+100) + 'px'; //数字是页面布局高度差，其中的100可以根据自己的界面进行调整*/
    },
    methods: {
        load (url) {
            if (url && url.length > 0) {
                let _this = this
                // 加载中
                _this.loading = true
                let param = {
                    accept: 'text/html, text/plain'
                }
                _this.$ajax({
                    method: 'get',
                    url: '/#/Featured',
                    data: param,
                }).then(function(res) {
                    console.log(url)
                    _this.loading = false
                    _this.html = res.data
                    console.log(res.data)
                }).catch(function(err) {
                    _this.loading = false
                    _this.html = '加载失败'
                    console.log(err)
                })
            }

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
   
</style>