// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'

import './config/rem'  // rem适配
// import {routerMode} from './config/env'

import './style/index.css'

/*import global from './components/Global'
Vue.prototype.GLOBAL = global*/
// 引入全局变量

Vue.config.productionTip = false

/*if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);  //  解决移动端300s延迟
    }, false);
}*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
/*new Vue({
	router,
	store,
}).$mount('#app')*/
