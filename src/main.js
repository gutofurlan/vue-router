import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'

const router = new VueRouter({ // instanvcia rotas
  mode: 'history', //remove o #
  routes // passa lista de rotas
})

Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
