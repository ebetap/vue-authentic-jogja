// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Auth from './services/Auth.js'

Vue.config.productionTip = false

// Router guard for admin page dashboard
router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
	if(requiresAuth){
		if(localStorage.getItem('isAuth')){
			next()
		}else{
			next('/admin')
			alert('You must log in to access admin dashboard!')
		}
	}else{
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
