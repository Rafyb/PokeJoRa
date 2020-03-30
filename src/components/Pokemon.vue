<template>
  <div id="Pokemon">
      <p>Pokemon n° {{param}}</p>
      <p>{{pokemons[0].data.names[6].name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  components: {
  },
  computed: {
        pokemons() {
            console.log(this.$store.getters.getPokemons);
            return this.$store.getters.getPokemons;
        },
        param() {
            return this.$route.params.id;
        }
    }
}
</script>

<style>

</style>