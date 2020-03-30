<template>
  <div id="PokNav">
    <ul>
      <li><router-link to="/">Accueil</router-link></li>
      <li><router-link to="/Pokedex">Pokédex</router-link></li>
      <li><router-link to="/Equipe">Equipe</router-link></li>
    </ul>
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
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>