<template>
    <section class="wrapper">
        <div class="div_swipe">
            <mt-swipe :show-indicators="true" :auto="4000">
                <mt-swipe-item>
					<a class="A_imgs" href="javascript:void(0)">
						<img src="../images/channel/chan_00.png" alt="">
					</a>
                </mt-swipe-item>
                <mt-swipe-item>
					<a class="A_imgs" href="javascript:void(0)">
						<img src="../images/channel/chan_002.png" alt="">
					</a>
                </mt-swipe-item>
                <mt-swipe-item>
					<a class="A_imgs" href="javascript:void(0)">
						<img src="../images/channel/chan_003.png" alt="">
					</a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </section>
</template>

<script>

    import Decrypt from '../config/aes_1'
    export default {
        name: 'home',
        data () {
            return {
                token:this.GLOBAL.token,//直接通过this访问全局变量。
            }
        },
        mounted(){
            // Decrypt.encrypt('12345')
            // console.log(JSON.parse(Decrypt.crypt('')))
            var postData = {
                channel:'ConfigObj.zdid',
                app_key:'ConfigObj.appkey',
                version:'ConfigObj.version',
                client:'client',
                mobile: 'userData[0]',
                password: 'userData[1]',
                mold:'pwd',
                code: '',
            }
            // console.log(Decrypt.encrypt(postData))
            /*var secretData = {
              'info' : encrypt(postData)
            };*/
        },
        components: {
            /**/
        }
    }
</script>
<style scoped>
	.div_swipe{height: 3.36rem;width: 100%;}
	.div_swipe .A_imgs{width: 100%;height:100%;}
</style>