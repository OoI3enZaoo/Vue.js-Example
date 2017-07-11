// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuefire from 'vuefire'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import login from './pages/login'
import navbar from './components/nav.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Vuefire)
Vue.use(VueRouter)

const routes = [
  {path : '/' , component : navbar }


//  ,  {path : '/store', component : myStore}
];

const router = new VueRouter({
  routes,
  mode :'history'
});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
