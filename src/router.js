import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Pokedex from './components/Pokedex.vue'
import Equipe from './components/Equipe.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[{
    path:'/',
    component: Home,
  },
  {
    path:'/Pokedex',
    component: Pokedex,
  },
  {
    path:'/Equipe',
    component: Equipe,
  }]
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')