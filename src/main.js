// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 根据网址的不同，返回不同的内容给用户
import router from './router'
// before: npm install fastclick --save
import fastClick from 'fastclick'
// 统一浏览器显示格式
import '@/assets/styles/reset.css'
// 解决1像素边框问题
import '@/assets/styles/border.css'
// 引入图标库
import '@/assets/styles/iconfont.css'
// 解决移动端300ms延迟问题
fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router: router,
	components: {
		App
	},
	template: '<App/>'
})