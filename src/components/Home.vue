<template>
  <div id="Home">    
    <img src="../assets/pokemon.png" alt="" height="10%" width="10%"/>
    <h1>Bienvenue sur Pokejora</h1>
    <carrousel :liste="imageListe" :length="imageListe.length"/>
    <p>News provenant du site <a href="https://www.pokemon.com/fr/">Pokemon</a></p>
  </div>
</template>

<script>
import carrousel from './carrousel.vue'

export default {
  name: 'Home',
  components: {
    carrousel
  },
  data:function(){
    return{
      imageListe:[
        {
          id:1,
          src:require('@/assets/sword-shield-169-fr.jpg')
        },
        {
          id:2,
          src:require('@/assets/pokemon-masters-169.jpg')
        },
        {
          id:3,
          src:require('@/assets/pokemon-rumble-rush-169.jpg')
        },
        {
          id:4,
          src:require('@/assets/pokemon-go-169.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
#Home a{
  color:#2d4494;
}

</style>