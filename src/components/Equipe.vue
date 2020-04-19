<template>
  <div id="Equipe">
      <p>EQUIPE</p>
        <div id="equipe">
          <div class="block" v-for="id in teamId" :key="id">
            <h3  v-if="id!=0">N°{{id + 1}}</h3>
            <img :src="`https://pokestrat.io/images/gif-animes/${id}.gif`" alt="animated"/>
            <button v-if="id!=0" v-on:click="deleteTeam(id)">Retirer de l'équipe</button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Equipe',
  data:function(){
    return{
      teamChange : 0
    }
  },
  computed:{
    teamId(){
      if(this.teamChange) console.log('refresh');
      return this.$store.getters.getTeam;
    }
  },
  methods:{
    deleteTeam(id){
      this.teamChange++;
      let team = this.$store.getters.getTeam;
      team[team.indexOf(id)] = 0;
      this.$store.commit('setTeam',team);
    }
  }
}
</script>

<style scoped>
#Equipe{
  padding-top: 0.1px;
  width:96%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin:2%;
  margin-bottom: 10%;
  padding-bottom:0.1% ;
  border-radius:15px;
  text-align: center;
  height:80%;
}

img{
  height:80px;
}

#equipe > .block{
  margin: 2%;
  padding: 1%;
  width: 180px;
  height: 180px;
  display: inline-block;
  vertical-align: top;
  background:  url('https://raw.githubusercontent.com/Rafyb/Pokejora/master/src/assets/pokeball_fond.png') center 0 no-repeat;
}

button{
  width: 180px;
  border: none;
  text-decoration: none;
  font-size: 19px;
  padding: 10px;
  color: white;
  background-color: #c62828
}

button:hover{
  background-color: #ffffff;
  color: #333333;
}

#equipe{
 width: 100%;
}
</style>