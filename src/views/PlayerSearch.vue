<template>
  <div class="container">
    <div class="search-container">
      <SearchBar />
      <AutoComplete />
    </div>
    <!-- <SearchResultTable/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchBar from '../components/SearchBar.vue';
import AutoComplete from '../components/AutoComplete.vue';
// import SearchResultTable from '../components/SearchResultTable.vue'  

export default defineComponent({
  components: {
    SearchBar,
    AutoComplete,
    // SearchResultTable
  }
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 40px;
}

.search-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
