<template>
    <section>
        <header class="aui-navBar aui-navBar-fixed" id="aui-header">
            <a  @click="$router.back(-1)" class="aui-navBar-item"  >
                <i class="icon icon-back"></i>
            </a>
            <div class="aui-center">
                <span class="aui-center-title"  id="title" >{{text}}</span>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: 'search',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
            // psMsg: ''
        }
    },
    props:['text'],
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
    .aui-navBar {
        background: #fff;
        position: fixed;
        width: 100%;
        height: 1rem;
        display: flex;
        z-index: 1002;
    }
    .aui-navBar-item:first-child {
        -webkit-box-ordinal-group: 2;
        -webkit-order: 1;
        -ms-flex-order: 1;
        order: 1;
        margin-right: -25%;
        font-size: .36rem;
        font-weight: bold;
    }
    .icon {
        width: .4rem;
        height: .4rem;
        display: block;
        border: none;
        float: left;
        background-size:.4rem;
        background-repeat: no-repeat;
    }
    .aui-center {
        -webkit-box-ordinal-group: 3;
        -webkit-order: 2;
        -ms-flex-order: 2;
        order: 2;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        height: 44px;
        width: 50%;
        /*margin-left: 21%;*/
        width: 100%;
        margin-left: .68rem;
    }
    .aui-center-title {
        text-align: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        text-overflow: ellipsis;
        font-size: 0.38rem;
        color: #333;
    }
</style>