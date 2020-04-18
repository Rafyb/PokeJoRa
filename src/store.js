import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemons: [],
        types: [],
        equipe: []
    },
    getters: {
        getPokemons: state => state.pokemons,
        getTypeData: state => state.types,
        getTeam: state => state.equipe
        
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
        },
        setTeam(state, payload) {
            if(payload) {
                state.equipe = payload;
            }
        }
    }
})
