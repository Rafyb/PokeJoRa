import Vue from 'vue'
import Home from './components/Home.vue'
import Pokedex from './components/Pokedex.vue'
import Equipe from './components/Equipe.vue'
import Projet from './components/Projet.vue'
import Router from 'vue-router'

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
  },
  {
    path:'/Projet',
    component: Projet,
  }]
})