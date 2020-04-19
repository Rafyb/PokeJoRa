<template>
  <div id="Projet">
      <p>PROJET</p>
      <div id="notation" class="block">
        <h2>Notation du projet</h2>
        <div id="part1" class="part">
          <h3>Maitrise des bases de VueJS 5 pts</h3>
          <input type="checkbox" checked value=0.71 id=1>
          <label for=1>Rendu déclaratif des variables</label>
          <br>
          <input type="checkbox" checked value=0.71 id=2>
          <label for=2>Liaison de données</label>
          <br>
          <input type="checkbox" checked value=0.71 id=3>
          <label for=3>Utilisation intelligente des composants</label>
          <br>
          <input type="checkbox" checked value=0.71 id=4>
          <label for=4>Communication entre composants à l’aide de props et d’événements personnalisés</label>
          <br>
          <input type="checkbox" checked value=0.71 id=5>
          <label for=5>Bonne utilisation des computed, methods, filtres, created...</label>
          <br>
          <input type="checkbox" checked value=0.71 id=6>
          <label for=6>Utilisation intelligente des directives (v-for, v-if, v-model… )</label>
          <br>
          <input type="checkbox" checked value=0.71 id=7>
          <label for=7>Modification intelligente de la css</label>
        </div>
        <div id="part2" class="part">
          <h3>Maitrise du router 5 pts</h3>
          <input type="checkbox" checked value=1.25 id=8>
          <label for=8>Configuration du router</label>
          <br>
          <input type="checkbox" checked value=1.25 id=9>
          <label for=9>Navigation à l’aide de routes entre composants</label>
          <br>
          <input type="checkbox" checked value=1.25 id=10>
          <label for=10>Passage de paramètres/props/query intelligent entre les routes</label>
          <br>
          <input type="checkbox" checked value=1.25 id=11>
          <label for=11>Utilisation de sous routes (Si besoin)</label>
        </div>
        <div id="part3" class="part">
          <h3>Maitrise des appels RESTfull via axios 3 pt</h3>
          <input type="checkbox" checked value=1 id=12>
          <label for=12>Appel d’une API REST</label>
          <br>
          <input type="checkbox" checked value=1 id=13>
          <label for=13>Gestion des succès et erreurs</label>
          <br>
          <input type="checkbox" checked value=1 id=14>
          <label for=14>Formatage des données reçues</label>
        </div>
        <div id="part4" class="part">
          <h3>Maitrise du store 5 pt</h3>
          <input type="checkbox" checked value=1.67 id=15>
          <label for=15>Utilisation de getters dans le store</label>
          <br>
          <input type="checkbox" checked value=1.67 id=16>
          <label for=16>Utilisation des mutations pour agir sur les données du store</label>
          <br>
          <input type="checkbox" checked value=1.67 id=17>
          <label for=17>Réutilisation des données du store entre les composants</label>
        </div>
        <div id="part5" class="part">
          <h3>Propreté du code (commentaires, indentation…) + présence d’un README explicatif</h3>
          <input type="checkbox" checked value=2 id=18>
          <label for=18>Clean code</label>
        </div>
        <div>
          <span>note: </span>
          <input type="text" v-model="note">
          <span>/20</span>
        </div>
        <span>{{merci}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Projet',
  components: {
  },
  data(){
    return{
      note:''
    }
  },
  computed:{
    merci(){
      if(this.note != '' && parseInt(this.note) >= 18) return "Merciiiiiiiiiiiiiiiiiiiiiiiiiiiiiii !";
      else if (this.note != '' && parseInt(this.note) >= 16) return "C'est une bonne note :)"
      return '';
    }
  }
}
</script>

<style scoped>
#notation {
  text-align:left;
}
.part{
  background-color: white;
  border: 1px solid black;
}
</style>