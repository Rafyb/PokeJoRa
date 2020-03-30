<template>
  <div id="Pokedex">
      <p>POKEDEX</p>
      <div>
          <ul v-for="pokemon in pokemons" :key="pokemon.id">
            <li>{{pokemon.data.names[6].name}} #{{pokemon.data.id}}</li>
          </ul>
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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  text-decoration: none;
}
</style>