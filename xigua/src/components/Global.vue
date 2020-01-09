<script>
console.log(platForm)
// if (true) {}
const serverSrc='www.baidu.com';
const token='12345678';
const hasEnter=false;
const meId = 1401
const userSite="中国钓鱼岛";
const version = '2.0.0'
const zdid = 'VHSU160A0WOHQ4B8'; //正式
const appkey = '0911CXH1-YD42-JYWX-RYOD-GCEKB6T0X8XN7'; // 正式
const localSite = 'https://jk.appjkou.xyz/v2';  //ip地址   安卓用戶版本視頻的   imei  861726046976666

const AalertMsg = function AalertMsg(title){
    console.log(15)
    /*let this_ = this
    this_.isLoading=false
    this_.$toast({message: title,position: 'bottom',duration: 2000});*/
}
 
  export default
  {
    userSite,//用户地址
    token,//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
    AalertMsg,
    version,
    meId,
    zdid,
    appkey,
    localSite
    // b64EncodeUnicode,
    // b64DecodeUnicode
  }
</script>