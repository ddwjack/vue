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


/*const encrypt = function encrypt(data){ //正式的加密
    var postData = JSON.stringify(data);
    var srcs = CryptoJS.enc.Utf8.parse(postData);
    var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
    var postDataHexStr = CryptoJS.enc.Hex.parse(encrypted.ciphertext.toString().toUpperCase());
    var postDataEnd = CryptoJS.enc.Base64.stringify(postDataHexStr);
    var str = b64EncodeUnicode(postDataEnd);
    return str;
}
const crypt = function crypt(data){
    // console.log(data)
    var data = b64DecodeUnicode(data);
    var decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}*/
  export default
  {
    userSite,//用户地址
    token,//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
    // encrypt,
    // crypt,
    version,
    meId,
    zdid,
    appkey,
    localSite
    // b64EncodeUnicode,
    // b64DecodeUnicode
  }
</script>