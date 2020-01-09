<template>
    <section class="padTopX">
        <titleHed text="充值会员"></titleHed>
        <div class="br" style="margin-top: 1rem;"></div>
        <div class="open-vip-t">
            <div class="br"></div>
            <div class="aui-content aui-margin-b-15">
                <center>
                    <ul class="aui-list aui-form-list" style="width:90%;border-top: 1px solid #dddddd;border-bottom: 1px solid #dddddd;" >
                        <li class="aui-list-item">
                            <div class="aui-list-item-inner" >
                                <div class="aui-list-item-label-icon">
                                    <i class="aui-iconfont aui-icon-lock"></i>
                                </div>
                                <div class="aui-list-item-input" >
                                    <input id="kami" type="text" placeholder="在此处粘贴激活码-激活码充值" style="color: #ff3a5c; ">
                                </div>
                            </div>
                        </li>
                    </ul>
                </center>
            </div>
            <div class="aui-content-padded">
                <p><div class="aui-btn-tuichu aui-btn-block" onclick="loginOff()">立 即 开 通</div></p>
                <div class="open-vip-b" >
                    <div class="vip_gou_1"  onclick="openUrl5()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">体验卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">7天 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="ty">1元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                    <div class="vip_gou_1"  onclick="openUrl1()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">月卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">30天 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="yk">5元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                    <div class="vip_gou_1"  onclick="openUrl2()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">季卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">90天 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="jk">10元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                    <div class="vip_gou_1"  onclick="openUrl6()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">半年卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">180天 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="bn">18元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                    <div class="vip_gou_1"  onclick="openUrl3()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">年卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">365天 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="nk">29.9元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                    <div class="vip_gou_1"  onclick="openUrl4()">
                        <div  class="vip_gou_2"><span class="vip_gou_3">永久卡</span>  </div>
                        <div class="vip_gou_4"><h2  class="vip_gou_5">永久 全网视频VIP</h2>
                            <p class="vip_gou_6" ><em class="vip_gou_7" id="yj">99元</em></p>
                        </div>
                        <div  class="vip_gou_8" >立即购买</div>
                    </div>
                </div><br>
                <p><div class="aui-btn-tuichu aui-btn-block"  id="weichat">专属客服微信：---</div></p>
            </div>
        </div>
    </section>
</template>

<script>
    import titleHed from '../components/titleHed'
    // import "../style/aui.css"
export default {
    name: 'money',
    data () {
        return {
            // txet:this.$route.query.url
        }
    },
    created () {
        console.log(this.$route.query)
    },
    mounted () {
    },
    methods: {
        loginTo(){
            console.log('登录')
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
       titleHed
    },
}
</script>
<style scoped>
    html,body{
        background: linear-gradient(to right,#fff 0,#fff 100%);
    }

    .vip_gou_1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        width: 100%;
        position: relative;
        box-shadow: 0 1px 12px #ddd;
        margin: .2rem 0px .2rem 0px;
        padding: .3rem .34rem;
        bottom: .2rem;
        top: .2rem;
    }

    .vip_gou_2 {
        margin-right: .2em;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
        text-align: center;
    }


    .vip_gou_3 {
        width: 100%;
        max-height: 100%;
        vertical-align: top;
        font-weight: bold;
        background: -webkit-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: -o-linear-gradient(left, #ff5e3e 0%, #ff1679 100%);
        background: linear-gradient(to right, #ff5e3e 0%, #ff1679 100%);
        -webkit-background-clip: text;
        color: transparent;
    
    }

    .vip_gou_4 {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 0;

    }

    .vip_gou_5 {
      font-weight: 400;
      font-size: 0.2rem;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
      color: #c0c0c0;
      padding-bottom: .2rem;

    }

    .vip_gou_6 {
    color: #808080;
    font-size: 0.2rem;
    line-height: .48rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    }

      .vip_gou_7 {
      font-size: 0.32rem;
      font-style: normal;
      background: linear-gradient(to right,#ff5e3e 0,#ff1679 100%);
      -webkit-background-clip: text;
      color: transparent;
      font-weight: bold;

      }

      .vip_gou_8 {
      background-image: -webkit-gradient(linear,left top,right top,from(#ff5e3e ),to(#ff1679 ));
      background-image: -webkit-linear-gradient(left,#ff5e3e,#ff1679);
      background-image: -moz-linear-gradient(left,#ff5e3e,#ff1679);
      background-image: linear-gradient(to right,#ff5e3e,#ff1679);
      background-color: #f7cc13;
      border-radius: 2px;
      color: #fff;
      font-size: 0.2rem;
      font-weight: bold;
      padding: 0.1rem 0.18rem;

      }
    .vip_gou_3{
        font-size: .32rem
    }
</style>