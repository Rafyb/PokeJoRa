<template>
  <div id="Filtres">
    <h2>Filtres de recherche</h2>
    <br>
    <div id="alert-box">
      <strong>EN CONSTRUCTION</strong>
      <slot></slot>
    </div>
    <br>
    <div id="Recherche">
      <input type="search" id="searchbar" v-model="recherche" v-on:input="envoi_filtre">
      <img src="../assets/logo_search.png" alt="search" height="3%" width="3%">
    </div>
    <br>
    <div id="Regions">
      <span>Région : </span>
      <select v-model="region" v-on:change="envoi_filtre">
      <option value='generation-i'>Kanto</option>
      <option value='generation-ii'>Johto</option>
      <option value='generation-iii'>Hoenn</option>
      <option value='generation-iv'>Sinnoh</option>
      <option value='generation-v'>Unys</option>
      <option value='generation-vi'>Kalos</option>
      <option value='generation-vii'>Alola</option>
      </select>
    </div>
    <br>
    <div id="Types">
      <input type="radio" id="acier" value="steel" v-model="type" v-on:change="envoi_filtre">
      <label for="acier"><img src="../assets/acier.png" alt="Acier" height="20%" width="20%"></label>
      <input type="radio" id="combat" value="fighting" v-model="type" v-on:change="envoi_filtre">
      <label for="combat"><img src="../assets/combat.png" alt="Combat" height="20%" width="20%"></label>
      <input type="radio" id="dragon" value="dragon" v-model="type" v-on:change="envoi_filtre">
      <label for="dragon"><img src="../assets/dragon.png" alt="Dragon" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="eau" value="water" v-model="type" v-on:change="envoi_filtre">
      <label for="eau"><img src="../assets/eau.png" alt="Acier" height="20%" width="20%"></label>
      <input type="radio" id="electrik" value="electric" v-model="type" v-on:change="envoi_filtre">
      <label for="electrik"><img src="../assets/electrik.png" alt="Electrik" height="20%" width="20%"></label>
      <input type="radio" id="fee" value="fairy" v-model="type" v-on:change="envoi_filtre">
      <label for="fee"><img src="../assets/fee.png" alt="Fee" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="feu" value="fire" v-model="type" v-on:change="envoi_filtre">
      <label for="feu"><img src="../assets/feu.png" alt="Feu" height="20%" width="20%"></label>
      <input type="radio" id="glace" value="ice" v-model="type" v-on:change="envoi_filtre">
      <label for="glace"><img src="../assets/glace.png" alt="Glace" height="20%" width="20%"></label>
      <input type="radio" id="inconnu" value="default" v-model="type" v-on:change="envoi_filtre">
      <label for="inconnu"><img src="../assets/inconnu.png" alt="Inconnu" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="normal" value="normal" v-model="type" v-on:change="envoi_filtre">
      <label for="normal"><img src="../assets/normal.png" alt="Normal" height="20%" width="20%"></label>
      <input type="radio" id="normal" value="Obscur" v-model="type" v-on:change="envoi_filtre">
      <label for="obscur"><img src="../assets/obscur.png" alt="Obscur" height="20%" width="20%"></label>
      <input type="radio" id="plante" value="grass" v-model="type" v-on:change="envoi_filtre">
      <label for="plante"><img src="../assets/plante.png" alt="Acier" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="poison" value="poison" v-model="type" v-on:change="envoi_filtre">
      <label for="poison"><img src="../assets/poison.png" alt="Poison" height="20%" width="20%"></label>
      <input type="radio" id="psy" value="psychic" v-model="type" v-on:change="envoi_filtre">
      <label for="psy"><img src="../assets/psy.png" alt="Psy" height="20%" width="20%"></label>
      <input type="radio" id="roche" value="rock" v-model="type" v-on:change="envoi_filtre">
      <label for="roche"><img src="../assets/roche.png" alt="Roche" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="sol" value="ground" v-model="type" v-on:change="envoi_filtre">
      <label for="sol"><img src="../assets/sol.png" alt="Sol" height="20%" width="20%"></label>
      <input type="radio" id="spectre" value="ghost" v-model="type" v-on:change="envoi_filtre">
      <label for="spectre"><img src="../assets/spectre.png" alt="Spectre" height="20%" width="20%"></label>
      <input type="radio" id="tenebre" value="dark" v-model="type" v-on:change="envoi_filtre">
      <label for="tenebre"><img src="../assets/tenebre.png" alt="Tenebre" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="vol" value="flying" v-model="type" v-on:change="envoi_filtre">
      <label for="vol"><img src="../assets/vol.png" alt="Vol" height="20%" width="20%"></label>
      <input type="radio" id="insecte" value="bug" v-model="type" v-on:change="envoi_filtre">
      <label for="insecte"><img src="../assets/insecte.png" alt="Insecte" height="20%" width="20%"></label>
    </div>
    <br>
    <div id=Tailles>
      <span> Taille min. </span>
      <input type="number" id="taille_min" v-model="taille_min" v-on:input="envoi_filtre">
      <span> Taille max. </span>
      <input type="number" id="taille_max" v-model="taille_max" v-on:input="envoi_filtre">
    </div>
    <br>
    <div id=buttons>
      <button id="clear_filters" v-on:click="clear_filters">Enlever les filtres</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filtres',
  data: function(){
    return {
      recherche:'',
      region:'',
      type:'',
      taille_min:'0',
      taille_max:'0',
    }
  },
  methods:{
    envoi_filtre(){
      this.$emit("my-event", this.recherche, this.region, this.type, parseInt(this.taille_min), parseInt(this.taille_max));
    },
    clear_filters(){
      this.recherche='';
      this.region='';
      this.type='';
      this.taille_min='';
      this.taille_max='';
      this.envoi_filtre();
    }
  },
  computed:{
  }
}
</script>

<style scoped>
#alert-box{
  border: black solid 1px;
  border-radius: 10px;
  background-color: red;
  width:80%;
  text-align: center;
  margin-left:10%;
}
#searchbar{
  border-radius: 30%;
  margin-right: 1%;
}
#Recherche{
  background-color: grey;
  padding-top: 2%;
  padding-bottom: 2%;
}
#Types{
  border: green solid 0.5px;
  border-radius: 5px;
  background-color: yellow;
  width:80%;
  text-align: center;
  margin-left:10%;
}
#Tailles span{
  font-size:50%;
}
#Tailles input{
  width:20%;
}
</style>