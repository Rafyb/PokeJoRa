<template>
  <div id="app">
    <PokNav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import axios from 'axios';
import TypesData from './assets/types.json';
import PokNav from './components/PokNav.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  created() {
    this.getAll();
    this.generateTypes();
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
        .catch(error =>{
            console.log(error);
        })
      }
      for(let idx =1; idx <= nb_pokemon; idx++){ 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
          .then(response=>{
            pokemonList[response.data.id-1].details = response.data;
          })
          .catch(error =>{
            console.log(error);
          })
      }
      this.$store.commit('setPokemons',pokemonList);
    },
    generateTypes(){
      this.$store.commit('setTypes',TypesData);
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
  height: 100%;
  width: 100%;
  /*margin-top: 60px;*/
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: rgb(255, 255, 255);
}

.block{
  border-radius: 0.2em;
  border: 1px solid gainsboro;
  background-color:#f8f8f8 ;
  font-family: 'Open Sans', sans-serif;
  color: black;
  margin : 5%;
  padding:5%;
}
</style>
