<template>
    <section>
        <section class="m-noRecord"><div class="c-icon-noRecord"></div> <div class="c-info">奋力加载中...</div></section>
    </section>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    },
    mounted(){
        // console.log(54)
        
    },
    methods: {
        searObj() {
            if (this.$refs.inpSea.value == '') {
                console.log(37)
                this.$toast({message: '请输入搜索内容',position: 'bottom',duration: 2000});
            }else{
                // console.log(this.$refs.inpSea.value)
                this.$router.push({name: 'search', params:{ cont: this.$refs.inpSea.value}})
            }
            // this.$refs.s.style.value = "blue";
            // this.$router.push({name: 'search', params:{ id: '1'}})
        }
    },
}
</script>
<style scoped>
   .m-noRecord {
        padding: .16rem 0 0;
        text-align: center;
        display: none;
    }
    .aui-navBar-item{
        position: absolute;
    }
    #aui-header .div_searc_two{
        margin-left: 1.2rem;
    }
    .m-noRecord .c-icon-noRecord {
        background: url(../image/app/Loading2.gif) no-repeat;
        background-size: cover;
      width: 6rem;
      height: 4rem;
      /* margin: .485rem auto 0; */
      margin: 0 auto;
    }
    .m-noRecord .c-info {
        background: linear-gradient(to right, #ffd74c, #c7752e);
        -webkit-background-clip: text;
        color: transparent;
        /* color: #cecfce;  */
        line-height: 1.6rem;
        padding: .1rem 0;
        font-size: .32rem;
    }
</style>