<template>
    <section>
        <header class="aui-navBar aui-navBar-fixed" id="aui-header" style="display:flex;">
            <ul>
                <li class="border-b active"> <a class="aui-navBar-item masked" id="tietle"> 新西瓜 </a> </li>
                <li class="border-b"> <a class="aui-navBar-item">热门大厅</a> </li>
                <li class="border-b"> <a class="aui-navBar-item">影音库</a> </li>
                <li class="border-b"> <a class="aui-navBar-item">福利中心</a> </li>
                <li class="border-b"> <a class="aui-navBar-item">会员中心</a> </li>
            </ul>
            <div class="div_searc_two" style="flex:1;">
                <p  class="p_img_sear">
                    <input ref="inpSea" id="val_sear" class="inp_form" type="text" placeholder="请输入影片名"> 
                    <span @click="searObj()"><img class="img_sear" src="../images/xigua/search.png" alt=""></span>
                </p>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: 'Asearch',
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
                this.$router.push({name: 'search', params:{ id: this.$refs.inpSea.value}})
            }
            // this.$refs.s.style.value = "blue";
            // this.$router.push({name: 'search', params:{ id: '1'}})
        }
    },
}
</script>
<style scoped>
   header ul li {
        height: 1rem;
        line-height: 1.2rem;
        font-size: 0.36rem;
        text-align: center;
        display: none;
        color: #f52737;
        border-bottom: 1px solid rgba(0, 0, 0, 0);
    }
    .aui-navBar-item{
        height: 1rem;
    }
    header ul li.active {
        display: block;
        color: #f52737;
    }
    .div_searc_two .p_img_sear{
        display: inline-block;
        background: #F0F2F5;
        width: 93%;
        height: .6rem;
        margin-top: .2rem;
        text-indent: 10px;
        border-radius: 30px;
    }
    .div_searc_two .inp_form{
        position: relative;
        width: 75%;
        height: 100%;
        border: 0;
        text-indent: 20px;
        outline-style: none;
        background: transparent;
        float: left;
    }
    .div_searc_two span{
        position: relative;
        float: right;
    }
    .div_searc_two .p_img_sear span:after{
        position: absolute;
        content: '';
        background: red;
        width: 1px;
        height: .32rem;
        top: .14rem;
        right: .8rem;
    }
    .div_searc_two .p_img_sear span::before{
        position: absolute;
        content: '';
        width: .8rem;
        height: .6rem;
        right: 0;
        top: 2px;
    }
    .div_searc_two .img_sear{
        width: .32rem;
        height: .32rem;
        float: right;
        margin: .14rem .32rem 0 0;
    }
</style>