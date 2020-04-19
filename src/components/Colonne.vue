<template>
    <div id="colonne">
        <div class="block">
            <h2>{{pokemon.data.names[6].name}} #{{pokemon.id}}</h2>
        </div>
        <img :src="'https://pokeres.bastionbot.org/images/pokemon/'+pokemon.data.id+'.png'" alt="Avatar" id="Avatar">
        <div class="types" v-html="typesToHtml(pokemon.details.types)"></div>
        <div class="block">
          <p>Taille : {{pokemon.details.height/10}} m</p>
          <p>Poids : {{pokemon.details.weight/10}} kg</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Colonne',
  props: {
      pokemon : Object
  },
  methods:{
      typesToHtml(types){
        let html = "";
        types.forEach(element => {
           html = `<img alt="type" src="${this.getType(element.type.name)}"></img>`+html; 
        });
        return html;
      },
      getType(typeName){
        let types = this.$store.getters.getTypeData.types;
        let type = types.find( type => type.name == typeName); 
        return type.sprite;
      }
      
  }
}
</script>

<style scoped>
#colonne{
  vertical-align: top;
  display: inline-block;
  width :20%;
  background-color: #f0f0f0;
  height: 100%;
  box-shadow: 5px 4px 8px 0 rgba(0,0,0,0.2);
  border-radius:15px 0 0 15px;
  border: 1px solid #adadad;
}

#Avatar{
  width:60%;
  background-color: #f0f0f0;
  margin:20%;
  margin-top: 5%;
  margin-bottom: 5%;
}

.types{
  width:204px;
  margin:auto;
}

p{
  text-align: justify;
}
</style>