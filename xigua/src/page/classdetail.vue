<template>
  <p>
    <titleHed text="代理专区"></titleHed>
  <!-- <mu-circular-progress :size="40" v-if="loading"/> -->
  <span class="span_html div_swi_top" v-html="html"></span>
 </p>
</template>
<style>
    .span_html{width: 100%;}
    /*.span_html .admin-header{margin-top: 1rem;}*/
    #nav a{font-size: .3rem}
    .span_html .post-title,.span_html .place{font-size: .3rem}
    .span_html .clearfix{line-height: 0;}
    .span_html p.white{padding:.1rem 0;}

    /**/
    .span_html .list .ybbt1{font-size: .3rem}
    .span_html .list li h3, .span_html .list li h2{font-size: .3rem}
    .span_html .list li p{font-size: .3rem}
    .span_html .layui-input{border: 1px solid #ececec;}
</style>
<script>
    import titleHed from '../components/titleHed'

 export default{
  // 使用时请使用 :url.sync=""传值
    data () {
        return {
            html: ''
        }
    },
    mounted () {

        this.load('http://www.lqpph.com/xxx/?id=2')
    },
    methods: {
        load (url) {
            console.log(url)
            if (url && url.length > 0) {
                // 加载中
                this.loading = true
                let param = {
                    accept: 'text/html, text/plain'
                }
                this.$ajax({
                    method: 'get',
                    url: `${this.baseUrl}index/dianka/index`,
                    dataType:'json',
                }).then((res) => {
                    console.log(res)
                    this.html = res.data
                    // this.data = res.data.vip.data
                    // this.Abanner = res.data.banner.data
                }).catch((res)=>{
                    console.log('请求失败')
                })

                /*this.$http.get(url, param).then((response) => {
                    this.loading = false
                    // 处理HTML显示
                    this.html = response.data
                }).catch(() => {
                    this.loading = false
                    this.html = '加载失败'
                })*/
            }
        }
    },
    components: {
        titleHed,
    },
 }
</script>