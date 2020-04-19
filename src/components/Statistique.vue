<template>
    <div id="stats">
        <table>
            <tr v-for="stat in pokemon.details.stats.reverse()" :key="stat.stat.name">
                <td>{{stat.stat.name.toUpperCase()}}</td>
                <td>{{stat.base_stat}}</td>
                <td><Statbar :stat="stat.base_stat"/></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Statbar from './Statbar.vue'

export default {
  name: 'Statistique',
  components:{
      Statbar
  },
  props: {
      pokemon : Object
  } 
}
</script>

<style scoped>
table td{
    padding: 0.2em 1em;
    font-size: 0.95em;
    max-width: 10em;
    background-color: white;
}
table{
    text-align: left;
    margin:2%;
}
</style>