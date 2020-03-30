<template>
  <div id="Home">
    <PokNav/>
    <img src="../assets/pokemon.png" alt="" height="10%" width="10%"/>
    <h1>Bienvenue sur Pokejora</h1>
  </div>
</template>

<script>
import PokNav from './PokNav.vue'
export default {
  name: 'Home',
  components: {
    PokNav
  }
}
</script>

<style>

</style>