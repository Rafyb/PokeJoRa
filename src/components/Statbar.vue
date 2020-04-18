<template>
    <div id="myProgress">
        <div id="myBar"  v-bind:style="{width:percentage,backgroundColor:color}" ></div>
    </div>
</template>

<script>

export default {
  name: 'Statbar',
  props: {
      stat : Number
  },
  computed:{
      percentage(){
          return this.stat +"px";
      },
      color(){
          if(this.stat >= 100) return "#2e8b57";
          if(this.stat < 50) return "#dc143c";
          return "#ffa500";
      },
  }
      
}
</script>

<style scoped>

#myProgress {
  width: 150px;
  background-color: #cccccc;
}

#myBar {
  height: 26px;
  background-color: rgb(92, 92, 92);
}

</style>