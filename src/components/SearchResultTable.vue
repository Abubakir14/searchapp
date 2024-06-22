<template>
  <table class="container-profile">
    <tr class="name">
      <th >Name</th>
      <th class="profile">Profile</th>
    </tr>
    <tr v-for="player in players" :key="player.id" @click="onSelect(player)" class="block">
      <td >{{ player.name }}</td>
      <td>{{ player.profile }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const players = computed(() => store.getters['players/searchResults'] || []);
    const router = useRouter();

    const onSelect = (player: any) => {
      router.push(`/profile/${player.id}`);
    };

    return { players, onSelect };
  }
});
</script>
<style scoped>
.container-profile{
  background-color: #935294;
  width: 150px;
  height: 100%;
  border-radius: 4px;
}
.name{
  display: flex;
  justify-content: center;
  gap:10px;
  font-family: SF Pro Display;
  color:  #f7e7cd;
}
.block{
    display: flex;
    gap:12px;
    margin-bottom: 5px;
    margin-top: 5px;
    justify-content: center;
  }
.block td{
  color:  #f7e7cd;
  font-family: SF Pro Display;
}
</style>