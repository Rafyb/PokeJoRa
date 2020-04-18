<template>
  <div id="Pokemon" v-bind:style="{backgroundColor:color}">
      <Colonne :pokemon="pokemon"/>
      <div class="block">
        <h3>Localisation</h3>
      </div>
      <div class="block">
        <h3>Statistique</h3>
        <Statistique :pokemon="pokemon"/>
      </div>
      <button id="btn1" v-on:click="goBack">Retour</button>
      <button id="btn2" v-on:click="addToTeam">Ajouter à l'équipe</button>
  </div>
</template>

<script>
import Colonne from './Colonne.vue'
import Statistique from './Statistique.vue'

export default {
  name: 'Pokemon',
  components: {
    Colonne,
    Statistique
  },
  computed: {
        pokemon() {
          if(this.$store.getters.getPokemons[this.$route.params.id-1] == undefined) {
            this.goBack();
            return undefined;
          }
          return this.$store.getters.getPokemons[this.$route.params.id-1];
        },
        color(){
          let typeName =  this.pokemon.details.types[this.pokemon.details.types.length-1].type.name;
          let types = this.$store.getters.getTypeData.types;
          console.log(typeName)
          console.log(types)
          let color = types[0].color;
          let type = types.find( type => type.name == typeName); 
          if(type != undefined) color = type.color;
          return color;
        }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      },
      addToTeam(){

      }
    }
}
</script>

<style scoped>
#Pokemon{
  padding-top: 0.1px;
  width:96%;
  height: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin:2%;
  border-radius:15px;
  text-align: left;
}

#Pokemon > .block{
  margin: 2%;
  margin-left: 22%;
  padding: 1%;
}

button{
  position: fixed;
  bottom: 10%;
  border: none;
  text-decoration: none;
  font-size: 1.1em;
  padding: 10px;
}

#btn1:hover,#btn2:hover{
  background-color: #ffffff;
  color: #333333;
}

#btn1{
  left: 20px;
  width:100px;
  color: white;
  background-color: #c62828;
}

#btn2{
  left: 120px;
  color: white;
  background-color: #333333;
}



</style>