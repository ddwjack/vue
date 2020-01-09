<template>
    <section class="padTopX">
        <!-- <titleHed text="代理管理"></titleHed> -->
        <header class="aui-navBar aui-navBar-fixed" id="aui-header">
            <a  @click="$router.back(-1)" class="aui-navBar-item"  >
                <i class="icon icon-back"></i>
            </a>
            <div class="aui-center" style="margin-left: 10%;">
                <span class="aui-center-title"  id="title" >正在播放</span>
            </div>
        </header>
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
    name: 'videoPlay',
    data () {
        return {
            txet:this.$route.params.url,
            loading: false,
            html: ''
        }
    },
    created () {
        console.log(this.$route.params)
    },
    mounted () {
        
    },
    methods: {
        load (url) {
            /*if (url && url.length > 0) {
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
   
</style>