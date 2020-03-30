<template>
  <div id="app">
    <PokNav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import axios from 'axios';
import PokNav from './components/PokNav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  created() {
    this.getAll();
  },
  components: {
    PokNav,
    Footer
  },
  methods: {
    getAll() {  
      let pokemonList = []   
      for(let idx =1; idx < 808; idx++){ 
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idx}/`)
        .then((response) => {       
            pokemonList.push({
              id:idx,
              data:response.data
            });
        }).catch(error => {
          console.log(error);
        });
      }
      pokemonList.sort((a,b)=> a.id.localeCompare(b.id));
      this.$store.commit('setPokemons',pokemonList);
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
