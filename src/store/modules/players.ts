import { Module } from 'vuex';
import { players } from '../../../static/data/players';
import router from '../../router/index'; // Импортируем объект router

interface Player {
  id: number;
  name: string;
  profile: string;
}

interface PlayersState {
  players: Player[];
  searchResults: Player[];
  selectedIndex: number;
}

const playersModule: Module<PlayersState, any> = {
  namespaced: true,
  state: {
    players: [],
    searchResults: [],
    selectedIndex: -1
  },
  getters: {
    allPlayers: state => state.players,
    searchResults: state => state.searchResults
  },
  mutations: {
    setPlayers(state, players) {
      state.players = players;
    },
    setSearchResults(state, results: Player[]) {
      state.searchResults = results;
      state.selectedIndex = -1; 
    },
    moveSelection(state, direction: string) {
      if (direction === 'down') {
        state.selectedIndex = (state.selectedIndex + 1) % state.searchResults.length;
      } else if (direction === 'up') {
        state.selectedIndex = (state.selectedIndex - 1 + state.searchResults.length) % state.searchResults.length;
      }
    },
    selectPlayer(state, player: Player) {
      const index = state.searchResults.findIndex(p => p.id === player.id);
      if (index !== -1) {
        state.selectedIndex = index;
      }
    }
  },
  actions: {
    async fetchPlayers({ commit }) {
      commit('setPlayers', players);
    },
    searchPlayers({ commit }, query: string) {
      const results = players.filter(player =>
        player.name.toLowerCase().includes(query.toLowerCase())
      );
      commit('setSearchResults', results);
    },
    async confirmSelection({ state, commit, dispatch }) {
      const player = state.searchResults[state.selectedIndex];
      if (player) {
        commit('selectPlayer', player);
        await dispatch('navigateToPlayer', player.id);
      }
    },
    async navigateToPlayer({ commit }, playerId: number) { 
      commit('selectPlayer', playerId);
      router.push(`/profile/${playerId}`); 
    }
  }
};

export default playersModule;
