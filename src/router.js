import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Pokedex from './components/Pokedex.vue'
import Equipe from './components/Equipe.vue'

Vue.use(Router)

export default new Router({
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