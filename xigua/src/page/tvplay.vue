<template>
    <section class="padTopX">
        <titleHed text="直播中"></titleHed>
        <!-- <p v-html="html"></p> -->
        <loaderGif v-if="isLoading"></loaderGif>
        <div class="tab-panel-item tab-active div_swi_top">
            <!-- <video :src="txet"></video> -->
            <video :src="txet" controls="controls" style="width: 100%;"></video>
        </div>
    </section>
</template>

<script>
    import loaderGif from '../components/loader'
    import titleHed from '../components/titleHed'
    // import "../style/cyberplayer"
    // import "../style/myui.css"
export default {
    name: 'tvplay',
    data () {
        return {
            txet:this.$route.params.id,
            isLoading: true,
            player: Function,
        }
    },
    created () {
        console.log(this.$route.params)
    },
    mounted () {
        this.isLoading = false
        // this.baiduMp4(this.$route.params.id)
    },
    methods: {
        
    },
    /*beforeDestroy() {
        this.player.remove();
    },
    // 实例销毁之后移除所有的监听器和完全销毁这些实例，清除它与其它实例的连接，解绑全部指令及监视器
    destroyed() {
        this.$off();
        this.$destroy();
    },*/
    components: {
        titleHed,
        loaderGif
    },
}
</script>
<style scoped>
    
</style>