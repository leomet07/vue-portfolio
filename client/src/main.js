import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


const base_url = process.env.NODE_ENV == "development" ? 'http://192.168.7.36:3000' : 'https://leonidportfoliobackend.herokuapp.com'
console.log("BASE_URL " + base_url)


window.BASE_URL = base_url

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')