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
      <input type="search" id="searchbar" v-model="recherche">
    </div>
    <br>
    <div id="Regions">
      <span>Région : </span>
      <select v-model="region">
      <option>Kanto</option>
      <option>Johto</option>
      <option>Hoenn</option>
      <option>Sinnoh</option>
      <option>Unys</option>
      <option>Kalos</option>
      <option>Alola</option>
      </select>
    </div>
    <br>
    <div id="Types">
      <input type="radio" id="acier" value="Acier" v-model="type">
      <label for="acier"><img src="../assets/acier.png" alt="Acier" height="20%" width="20%"></label>
      <input type="radio" id="combat" value="Combat" v-model="type">
      <label for="combat"><img src="../assets/combat.png" alt="Combat" height="20%" width="20%"></label>
      <input type="radio" id="dragon" value="Dragon" v-model="type">
      <label for="dragon"><img src="../assets/dragon.png" alt="Dragon" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="eau" value="Eau" v-model="type">
      <label for="eau"><img src="../assets/eau.png" alt="Acier" height="20%" width="20%"></label>
      <input type="radio" id="electrik" value="Electrik" v-model="type">
      <label for="electrik"><img src="../assets/electrik.png" alt="Electrik" height="20%" width="20%"></label>
      <input type="radio" id="fee" value="Fee" v-model="type">
      <label for="fee"><img src="../assets/fee.png" alt="Fee" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="feu" value="Feu" v-model="type">
      <label for="feu"><img src="../assets/feu.png" alt="Feu" height="20%" width="20%"></label>
      <input type="radio" id="glace" value="Glace" v-model="type">
      <label for="glace"><img src="../assets/glace.png" alt="Glace" height="20%" width="20%"></label>
      <input type="radio" id="inconnu" value="Inconnu" v-model="type">
      <label for="inconnu"><img src="../assets/inconnu.png" alt="Inconnu" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="normal" value="Normal" v-model="type">
      <label for="normal"><img src="../assets/normal.png" alt="Normal" height="20%" width="20%"></label>
      <input type="radio" id="normal" value="Obscur" v-model="type">
      <label for="obscur"><img src="../assets/obscur.png" alt="Obscur" height="20%" width="20%"></label>
      <input type="radio" id="plante" value="Plante" v-model="type">
      <label for="plante"><img src="../assets/plante.png" alt="Acier" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="poison" value="Poison" v-model="type">
      <label for="poison"><img src="../assets/poison.png" alt="Poison" height="20%" width="20%"></label>
      <input type="radio" id="psy" value="Psy" v-model="type">
      <label for="psy"><img src="../assets/psy.png" alt="Psy" height="20%" width="20%"></label>
      <input type="radio" id="roche" value="Roche" v-model="type">
      <label for="roche"><img src="../assets/roche.png" alt="Roche" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="sol" value="Sol" v-model="type">
      <label for="sol"><img src="../assets/sol.png" alt="Sol" height="20%" width="20%"></label>
      <input type="radio" id="spectre" value="Spectre" v-model="type">
      <label for="spectre"><img src="../assets/spectre.png" alt="Spectre" height="20%" width="20%"></label>
      <input type="radio" id="tenebre" value="Tenebre" v-model="type">
      <label for="tenebre"><img src="../assets/tenebre.png" alt="Tenebre" height="20%" width="20%"></label>
      <br>
      <input type="radio" id="vol" value="Vol" v-model="type">
      <label for="vol"><img src="../assets/vol.png" alt="Vol" height="20%" width="20%"></label>
    </div>
    <br>
    <div id="Evolutions">
      <input type="radio" id="premiere" value="Premiere" v-model="evolution">
      <label for="premiere">1ère évolution</label>
      <input type="radio" id="seconde" value="Seconde" v-model="evolution">
      <label for="seconde">2nd évolution</label>
      <input type="radio" id="troisieme" value="Troisieme" v-model="evolution">
      <label for="troisieme">3ème évolution</label>
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
      evolution:''
    }
  },
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
  border-radius: 10px;
}
</style>