<template>
  <div id="Pokedex">
        <Filtres @my-event="change_filters"/>
        <div class="contenu">
          <p>POKEDEX</p>
          <div v-if="pokemons == undefined">
            <img src="https://media.giphy.com/media/RaGnv1Dx2aseY/source.gif">
            <h1> Chargement du Pokedex </h1>
          </div>

            <div v-else class="card" v-for="pokemon in filteredPokemons" :key="pokemon.id">
              <router-link :to="{path:'Pokedex/'+pokemon.id}">
                      <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.data.id+'.png'" alt="Avatar" style="width:100%">
                      <div class="container">
                          <h4><b>N°{{pokemon.data.id}}</b></h4>
                          <p>{{pokemon.data.names[6].name}}</p>
                      </div>
              </router-link>
            </div>

          </div>
  </div>
</template>

<script>
import Filtres from './Filtres.vue'
export default {
  name: 'Pokedex',
  components:{
    Filtres
  },
  data:function(){
    return {
      loading:true,
      recherche:'',
      region:'',
      type:'',
      taille_min:'', 
      taille_max:'',
    };
  },
  computed: {
    pokemons() {
      this.refresh();
      if(this.loading == true) return undefined;
      return this.$store.getters.getPokemons;
    },
    filteredPokemons(){
      let filteredPoke = this.pokemons.filter(x => x.data.names[6].name.includes(this.recherche));
      if(this.region != ''){
        filteredPoke = filteredPoke.filter(x => x.data.generation.name == this.region);
      }

      if(this.type != ''){
        filteredPoke = filteredPoke.filter(x => this.types_pokemon(x.details.types,this.type));
      }
      if(this.taille_min != '' && this.taille_max != ''){
        filteredPoke = filteredPoke.filter(x => (x.data.height >= this.taille_min && x.data.height <= this.taille_max));
      }
      else if(this.taille_min !='' && this.taille_max == ''){
        filteredPoke = filteredPoke.filter(x => (x.data.height >= this.taille_min));
      }
      else if(this.taille_min == '' && this.taille_max != ''){
        filteredPoke = filteredPoke.filter(x => (x.data.height <= this.taille_max));
      }
      return filteredPoke;
    }
  }, 
  methods: {
    refresh(){
      if(this.$store.getters.getPokemons == undefined || this.$store.getters.getPokemons.length < 806){
        setTimeout(this.refresh,1500);
      } else {
        this.loading = false;
      }
    },
    change_filters(recherche, region, type, taille_min, taille_max){
      console.log("change"+recherche);
      this.recherche=recherche;
      this.region=region;
      this.type=type;
      this.taille_min=taille_min;
      this.taille_max=taille_max;
    },
    types_pokemon(types,type){
      let ret = false;
      console.log(types);
      console.log(type);
      types.forEach(function(loop_type){
          if (loop_type.type.name == type) {
            ret = true;
          }
      })
      return ret;  
    }
  }
}
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 18%;
  margin:1%;
  float:left;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.575);
}
.container {
  padding: 2px 16px;
  background-color: rgb(58, 58, 58);
  color:white;
}
#Filtres{
  width:30%;
  position: fixed;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  height: 85%;
}

.contenu{
  width: 68%;
  margin-left: 31%;
  margin-right:1% ;
}

b{
  border-radius: 12px;
  text-align: left;
}
</style>