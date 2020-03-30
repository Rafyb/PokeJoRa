<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  created() {
    this.getAll();
  },
  components: {
  },
  methods: {
    getAll() {  
      let pokemonList = []   
      for(let idx =0; idx < 808; idx++){ 
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
  margin-top: 60px;
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
