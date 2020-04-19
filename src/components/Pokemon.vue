<template>
  <div id="Pokemon" v-bind:style="{backgroundColor:color}">
      <Colonne :pokemon="pokemon"/>
      <div class="block">
        <h3>Block d'info 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris turpis, tempor et venenatis vitae, placerat sit amet mi. Fusce tincidunt, turpis sodales sagittis vestibulum, justo lacus pretium mi, vitae scelerisque lorem purus vel ante. Vivamus a neque eget felis cursus laoreet. Suspendisse et feugiat quam. Sed luctus tempor accumsan. Ut dapibus metus felis, eget porta tortor posuere non. Donec quis libero vitae elit rhoncus pretium. Vestibulum pharetra metus nec consectetur imperdiet. Aenean tristique risus at suscipit pulvinar.</p>
        <p>Pellentesque luctus sed elit et facilisis. Curabitur molestie aliquam metus at semper. Phasellus vel consequat lectus. Suspendisse eget arcu sollicitudin, congue quam sit amet, laoreet dui. Aliquam ut enim at nulla blandit elementum. Donec aliquam lacus et leo scelerisque tempus a id dolor. Fusce ornare interdum metus.</p>
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
        let team = this.$store.getters.getTeam;
        let idxLibre = team.indexOf(0);
        if(idxLibre == -1) {
          alert("Votre équipe est pleine");
        } else {
          team[idxLibre] = this.pokemon.id;
          alert("Le pokremon N°"+this.pokemon.id+" a bien été ajouté");
        }
      }
    }
}
</script>

<style scoped>
#Pokemon{
  padding-top: 0.1px;
  width:96%;
  min-height: 70%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin:2%;
  margin-bottom: 10%;
  padding-bottom:1% ;
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