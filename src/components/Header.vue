<template>
  <div id="Header">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/Pokedex">Pokédex</router-link></li>
      <li><router-link to="/Equipe">Equipe</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style>

</style>