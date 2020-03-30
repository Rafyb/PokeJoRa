<template>
  <div id="Pokemon">
      <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.data.id+'.png'" alt="Avatar" style="width:10%">
      <p>Pokemon n° {{pokemon.id}}</p>
      <p>Nom : {{pokemon.data.names[6].name}}</p>
      <button v-on:click="goBack">Retour</button>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  components: {
  },
  computed: {
        pokemon() {
            console.log(this.$store.getters.getPokemons);
            return this.$store.getters.getPokemons[this.$route.params.id-1];
        }
    },
    methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>