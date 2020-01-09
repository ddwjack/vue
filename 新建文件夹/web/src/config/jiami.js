/*function encrypt(data){ //正式的加密
    var postData = JSON.stringify(data);
    var srcs = CryptoJS.enc.Utf8.parse(postData);
    var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
    var postDataHexStr = CryptoJS.enc.Hex.parse(encrypted.ciphertext.toString().toUpperCase());
    var postDataEnd = CryptoJS.enc.Base64.stringify(postDataHexStr);
    var str = b64EncodeUnicode(postDataEnd);
    return str;
}
function crypt(data){
    // console.log(data)
    var data = b64DecodeUnicode(data);
    var decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}*/
/*function b64EncodeUnicode(str) {
	
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
function b64DecodeUnicode(str) {
    // console.log(str)
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}*/

/*export default {
	encrypt:function(data){ //正式的加密
	    var postData = JSON.stringify(data);
	    var srcs = CryptoJS.enc.Utf8.parse(postData);
	    var encrypted = CryptoJS.AES.encrypt(srcs, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
	    var postDataHexStr = CryptoJS.enc.Hex.parse(encrypted.ciphertext.toString().toUpperCase());
	    var postDataEnd = CryptoJS.enc.Base64.stringify(postDataHexStr);
	    var str = b64EncodeUnicode(postDataEnd);
	    return str;
	},
	crypt:function(data){
	    // console.log(data)
	    var data = b64DecodeUnicode(data);
	    var decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("MUGNHU3FG5RE8F4F"), { iv: CryptoJS.enc.Utf8.parse("0ELFZI7HPQT1OW4L"),mode:CryptoJS.mode.CBC,padding: CryptoJS.pad.Pkcs7});
	    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
	    return decryptedStr.toString();
	},
	b64EncodeUnicode:function(str) {
	    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
	        return String.fromCharCode('0x' + p1);
	    }));
	},
	b64DecodeUnicode:function(str) {
	    // console.log(str)
	    return decodeURIComponent(atob(str).split('').map(function(c) {
	        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
	    }).join(''));
	}
}*/