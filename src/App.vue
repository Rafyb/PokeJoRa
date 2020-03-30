<template>
  <div id="app">
    <PokNav/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import PokNav from './components/PokNav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    PokNav,
    Footer
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
  /*margin-top: 60px;*/
}

html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
