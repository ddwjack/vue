<script>
console.log(platForm)
// if (true) {}
const serverSrc='www.baidu.com';
const token='12345678';
const hasEnter=false;
const userSite="中国钓鱼岛";
/*const b64EncodeUn = function b64EncodeUnicode(str) {
    console.log(9)
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}*/
const encrypt = function encrypt(data){ //正式的加密
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
}

/*const b64EncodeUnicode = function b64EncodeUnicode(str) {
    
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
const b64DecodeUnicode = function b64DecodeUnicode(str) {
    // console.log(str)
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}*/
  export default
  {
    userSite,//用户地址
    token,//用户token身份
    serverSrc,//服务器地址
    hasEnter,//用户登录状态
    encrypt,
    crypt,
    // b64EncodeUnicode,
    // b64DecodeUnicode
  }
</script>