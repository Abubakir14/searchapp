import { createStore } from 'vuex';
import playersModule from './modules/players';

const store = createStore({
  modules: {
    players: playersModule 
  }
});

store.dispatch('players/fetchPlayers');

export default store;
