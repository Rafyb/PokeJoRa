<template>
  <div id="app">
    <Header/>
    <h1>Bienvenue sur Pokejora</h1>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
