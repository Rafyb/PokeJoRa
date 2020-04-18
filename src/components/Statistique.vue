<template>
    <div id="stats">
        <table>
            <tr>
                <td>PV</td>
                <td>{{pokemon.details.stats[5].base_stat}}</td>
            </tr>
            <tr>
                <td>Attaque</td>
                <td>{{pokemon.details.stats[4].base_stat}}</td>
            </tr>
            <tr>
                <td>Défense</td>
                <td>{{pokemon.details.stats[3].base_stat}}</td>
            </tr>
            <tr>
                <td>Att Spé</td>
                <td>{{pokemon.details.stats[2].base_stat}}</td>
            </tr>
            <tr>
                <td>Def Spé</td>
                <td>{{pokemon.details.stats[1].base_stat}}</td>
            </tr>
            <tr>
                <td>Vitesse</td>
                <td>{{pokemon.details.stats[0].base_stat}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Statistique',
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
}

table{
    text-align: left;
    margin:2%;
}

</style>