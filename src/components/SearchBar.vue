<template>
  <div>
    <input 
      v-model="query" 
      @input="onInput" 
      @keydown.down.prevent="onArrowDown"
      @keydown.up.prevent="onArrowUp"
      @keydown.enter.prevent="onEnter"
      placeholder="Search for players..." 
      class="input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const query = ref('');

    const onInput = () => {
      if (query.value.length >= 3) {
        store.dispatch('players/searchPlayers', query.value);
      } else {
        store.commit('players/setSearchResults', []);
      }
    };

    const onArrowDown = () => {
      store.commit('players/moveSelection', 'down');
    };

    const onArrowUp = () => {
      store.commit('players/moveSelection', 'up');
    };

    const onEnter = () => {
      store.dispatch('players/confirmSelection');
    };

    onMounted(() => {
      store.commit('players/setSearchResults', []);
    });

    return { query, onInput, onArrowDown, onArrowUp, onEnter };
  }
});
</script>

<style scoped>
input {
  width: 400px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  margin: 0;
}

input:focus {
  border: 3px solid #935294;
}
</style>
