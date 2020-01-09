<template>
    <section class="padTopX">
        <titleHed :text="html"></titleHed>
        <!-- <p v-html="html"></p> -->
        <loaderGif v-if="isLoading"></loaderGif>
        <div style="height:100vh;margin-top: 1rem;">
            <iframe id="Aifram" frameborder="0" scrolling="yes" style="background-color:transparent; position:absolute;width: 100%;
         height:80%;; top: 0;left:0;" :src='txet' :loader="loade()"></iframe>
        </div>
    </section>
</template>

<script>
    import loaderGif from '../components/loader'
    import titleHed from '../components/titleHed'
    import "../style/myui.css"
export default {
    name: 'feaRadio',
    data () {
        return {
            txet:this.$route.query.url,
            isLoading: true,
            html: this.$route.query.title
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
        
    },
    activated(){
        console.log(49)
        this.isLoading = true
    },
    methods: {
        loade(url) {
            this.isLoading = false
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
   
</style>