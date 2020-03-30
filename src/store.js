import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
    },
    getters: {
        getPokemons: state => state.pokemons,
    },
    mutations: {
        setPokemons(state, payload) {
            if(payload) {
                let tab = payload.slice();
                tab.sort((a,b)=> a.id.localCompare(b.id));
                state.pokemons = tab;
            }
        }
    }
})
