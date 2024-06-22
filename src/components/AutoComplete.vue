<template>
  <ul v-if="results && results.length" class="autocomplete-list">
    <li 
      v-for="(result, index) in results" 
      :key="result.id" 
      @click="onSelect(result)"
      :class="{ 'selected': index === selectedIndex }"
    >
      {{ result.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const results = computed(() => store.getters['players/searchResults'] || []);
    const selectedIndex = computed(() => store.state.players.selectedIndex);
    const router = useRouter();

    const onSelect = (result: any) => {
      router.push(`/profile/${result.id}`);
    };

    return { results, selectedIndex, onSelect };
  }
});
</script>

<style scoped>
.autocomplete-list {
  padding: 0;
  margin: 0;
  list-style: none;
}

.autocomplete-list li {
  font-size: 25px;
  color: #935294;
  background-color: #f7e7cd;
  font-family: SF Pro Display;
  width: 385px;
  padding-left: 15px;
  padding-bottom: 5px;
  cursor: pointer;
}
.autocomplete-list li:hover {
  font-size: 25px;
  color: #935294;
  background-color: #d3d3d3;
  font-family: SF Pro Display;
  width: 385px;
  padding-left: 15px;
  padding-bottom: 5px;
  cursor: pointer;
}

.autocomplete-list li.selected {
  background-color: #d3d3d3;
}
</style>
