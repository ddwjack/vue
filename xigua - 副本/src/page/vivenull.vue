<template>
    <section class="wrapper">
        <p>这是进来显示的默认页面</p>
    </section>
</template>

<script>
export default {
    name: 'vivenull',
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    mounted(){
        // console.log(16)
        this.$router.push('/home')
    },
    activated(){
        console.log(19)
    },
    methods:{
    }
}
</script>
<style scoped>
    /*头部搜索*/
</style>