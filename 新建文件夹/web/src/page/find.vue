<template>
    <section>
        <header class="head_search center">
            <span class="link search_sub">发现</span>
        </header>
        <!-- <transition name="router-slid" mode="out-in"> -->
            <footerFixed></footerFixed>
        <!-- </transition> -->
    </section>
</template>

<script>
import footerFixed from '../components/footer'
export default {
    name: 'home',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    components: {
        footerFixed,
    },
}
</script>
<style scoped>
    /*头部搜索*/
</style>