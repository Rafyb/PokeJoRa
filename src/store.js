import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
        types: []
    },
    getters: {
        getPokemons: state => state.pokemons,
        getTypeData: state => state.types
        
    },
    mutations: {
        setPokemons(state, payload) {
            if(payload) {
                state.pokemons = payload;
            }
        },
        setTypes(state, payload) {
            if(payload) {
                state.types = payload;
            }
        }
    }
})
