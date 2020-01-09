// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {routerMode} from './config/env'
import './config/rem'
import './config/aes_1'

import Decrypt_ from './config/aes_1' // 加密解密
import datapi from '../config/api' // 加密解密

import FastClick from 'fastclick'
import "./style/api.css"
import "./style/aui.css"
import "./style/style.css"
import "./style/iconfont.css"

import MintUI from 'mint-ui'
import global_ from './components/Global'//引用全局变量 
import 'mint-ui/lib/style.css'
import axios from 'axios'
import qs from 'qs'
Vue.use(MintUI)

Vue.prototype.$ajax = axios
Vue.prototype.qs = qs
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面
Vue.prototype.Decrypt = Decrypt_//挂载到Vue实例上面
Vue.prototype.baseUrl = process.env.API_ROOT//挂载到Vue实例上面



Vue.config.productionTip = false
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);  //  解决移动端300s延迟
    }, false);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
