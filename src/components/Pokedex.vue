<template>
  <div id="Pokedex">
        <p>POKEDEX</p>
        <div id="plateau" v-for="pokemon in pokemons" :key="pokemon.id">
            <router-link :to="{path:'Pokedex/'+pokemon.id}">
                <div class="card">
                    <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.data.id+'.png'" alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>{{pokemon.data.id}}</b></h4>
                        <p>{{pokemon.data.names[6].name}}</p>
                    </div>
                </div>
            </router-link>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Pokedex',
  components: {
  },
  computed: {
    pokemons() {
      console.log(this.$store.getters.getPokemons);
      return this.$store.getters.getPokemons;
    },
  },
}
</script>

<style scoped>
#plateau {
  margin: auto;
  width: 80%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
  height: 10%;
  float:left;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.container {
  padding: 2px 16px;
}
</style>