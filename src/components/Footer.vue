<template>
  <div id="Footer">    
    <p>&copy; Copyright 2020, POKEJORA, Johann - Raphaël     API : <a href="https://pokeapi.co/">PokeAPI</a> / Images : <a href="https://pokeres.bastionbot.org/images/pokemon/">Pokeres</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {
  }
}
</script>

<style>

#Footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #333;
  color: white;
  font-size: 0.8em;
}

a{
  color: white;
  text-decoration: none;
}

</style>