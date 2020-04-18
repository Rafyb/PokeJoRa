<template>
  <div id="Pokemon">
      <div id="colonne">
        <div class="block">
        <h3>{{pokemon.data.names[6].name}}</h3>
        <p>Numero de Pokedex : {{pokemon.id}}</p>
        </div>
        <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.data.id+'.png'" alt="Avatar" id="Avatar">
        <p>{{details.types[0].type.name}}</p>
        
      </div>
      <button v-on:click="goBack">Retour</button>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  computed: {
        pokemon() {
            return this.$store.getters.getPokemons[this.$route.params.id-1];
        },
        details(){
          if(this.$store.getters.getPokemons[this.$route.params.id-1].details == undefined) {
            this.getDetails();
          }
          return this.$store.getters.getPokemons[this.$route.params.id-1].details;
        }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
  }
}
</script>

<style scoped>
#Pokemon{
  width:96%;
  height: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin:2%;
  border-radius:15px;
  text-align: left;
  /*border: 5px solid #333333;*/
}

#Avatar{
  width:60%;
  background-color: #f0f0f0;
  margin:20%;
  margin-top: 5%;
}


.block{
  border-radius: 0.2em;
  border: 1px solid gainsboro;
  background-color:#f8f8f8 ;
  font-family: 'Open Sans', sans-serif;
  color: black;
  margin : 5%;
  padding:5%;
}

#colonne{
  float: left;
  width :25%;
  background-color: #f0f0f0;
  height: 100%;
  box-shadow: 5px 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:15px 0 0 15px;
  padding-left:10px;
  border: 1px solid #adadad;
}

button{
  position: fixed;
  bottom: 10%;
  left: 1%;
  border: none;
  text-decoration: none;
  font-size: 1.4em;
  color: white;
  background-color: #c62828;
  padding: 10px;
}

button:hover{
  background-color: #333333;
}

</style>