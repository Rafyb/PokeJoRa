<template>
  <div id="Pokemon">
      <p>Pokemon n° {{pokemon.id}}</p>
      <p>{{pokemon.data.names[6].name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  components: {
  },
  computed: {
    pokemon() {
        return this.$store.getters.getPokemons[this.$route.params.id-1];
    }
  }
}
</script>

<style>

</style>