<template>
  <div id="PokNav">
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
  name: 'PokNav',
}
</script>

<style>
  ul {
    list-style-type: none;
    background-color: #dddddd;
    margin: 0;
    padding: 0;
  };
  li router-link {
  display: inline;
}
</style>