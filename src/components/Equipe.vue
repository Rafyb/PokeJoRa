<template>
  <div id="Equipe">
      <p>EQUIPE</p>
        <div id="equipe">
          <div class="block">
            <h3>1</h3>
          </div>
          <div class="block">
            <h3>2</h3>
          </div>
          <div class="block">
            <h3>3</h3>
          </div>
          <div class="block">
            <h3>4</h3>
          </div>
          <div class="block">
            <h3>5</h3>
          </div>
          <div class="block">
            <h3>6</h3>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'Equipe',
  components: {
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
}

#equipe > .block{
  margin: 2%;
  padding: 1%;
  width: 30%;
  height:30%;
  display: inline-block;
}

#equipe{
 width: 100%;
}
</style>