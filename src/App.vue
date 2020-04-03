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
      let nb_pokemon = 807;
      let pokemonList = [];   
      for(let idx =1; idx <= nb_pokemon; idx++){ 
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idx}/`)
        .then(response=>{
          pokemonList[response.data.id-1]={
              id:response.data.id,
              data:response.data
          };
        })
        .catch(error => console.log(error) )
      }
      console.log(pokemonList)
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
  background-color: rgb(255, 255, 255);
}

</style>
