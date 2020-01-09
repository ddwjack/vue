<template>
    <section>
        <header class="head_search center">
            <div class="div_sear">
                <span class="link search_sub">{{token}}</span>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            token:this.GLOBAL.token,//直接通过this访问全局变量。
        }
    }
}
</script>
<style scoped>
    /*头部搜索*/
    .head_search{padding-top: 1rem;}
    .head_search .div_sear{width: 17.15rem;height: 2.2rem;overflow: hidden;box-shadow: 0px 1px 3px 3px rgba(0,0,0,0.16);margin:0 auto;border-radius: 30px;}
    .head_search .input_search{width: 13.95rem;height: 2.2rem;color: #4A4A4A;}
    .head_search .search_sub{width: 3.19rem;height: 2.2rem;background: #F8E71C;color: #8B572A;line-height: 2.4rem;font-size: 0.85rem;}

    /*分类*/
    .div_one{padding-top: 20px;}
    .div_one .ul_img_list{}
    .div_one .li_list{width: 30%;padding-right: 5%;font-size: 0.65rem;}
    .div_one .li_list:nth-of-type(3n+0){padding-right: 0;}
    .div_one .img_one{width: 90%;border:1px solid #ececec;border-radius: 16px;padding: 4%;}
    .div_one .li_list .p_name{margin:3px 0 8px;text-align:center;}
    /**/
    .pad16 .h3{position: relative;font-size: 0.85rem;padding:0.6rem 0 0.8rem 10px;}
    .pad16 .h3 .i_col{position: absolute;width: 4px;height: 1rem;left: 0;top: 46%;border-radius: 3px;transform: translate(-50%,-50%);}

    .div_two{}
    .div_two .h3 .i_col{background: #50E3C2;}
    .div_two .li_cent_list{position: relative;width: 18%;margin-right: 2.4%;margin-bottom: .5rem;box-shadow:0px 1px 2px 0px rgba(0,0,0,0.25);}
    .div_two .li_cent_list:nth-of-type(5n+0){margin-right: 0;}
    .div_two .li_cent_list .sp_text{position: absolute;width: 100%;font-size: 0.55rem;bottom: 0;left: 0;background: rgba(0,0,0,0.5);color: #fff;line-height: 1rem;}
    .div_three{}
    .div_three .h3 .i_col{background: #F8C61C;}
    .div_three .ul_pabot{padding-bottom: 0.8rem;}
    .div_three .li_w17{width: 17%;color: #32BEFF;}
    .div_three .li_w83{width: 83%;}
    .div_three .wid33{width: 33.3%;}
    .div_three .wid33 a{display: block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
</style>