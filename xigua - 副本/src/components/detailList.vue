<template>
    <section class=" fdfd">
        <p >props</p>
        <p></p>
        
        <!-- <footerFixed></footerFixed> -->
    </section>
</template>

<script>
// import footerFixed from '../components/footer'
export default {
   /* name: "homelist",
    props: {
        message: ['newsList'] //定义传值的类型<br>  }
    },*/
    // props: ['newsList'],
    data () {
        return {
            // token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    created(){
        console.log(20)
    },
    mounted(){
        console.log(27)
    },
    methods:{
        gosearch(id) {
            // this.$router.push('/search/' + id)
            // console.log('/search/' + id)
            // this.$router.push({name: 'search', params:{ id: id}})
        },
    },
    components: {
        // footerFixed,
    },
}
</script>
<style scoped>
    
</style>