<template>
  <div class="player-profile-block">
    <h1 class="player-name">{{ player?.name }}</h1>
    <p class="player-profile">{{ player?.profile }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { players } from '../../static/data/players';

interface Player {
  id: number;
  name: string;
  profile: string;
}

export default defineComponent({
  setup() {
    const route = useRoute();
    const playerId = route.params.id;
    const player: Player | undefined = players.find(player => player.id === parseInt(playerId as string));
    return { player };
  }
});
</script>

<style scoped>
.player-profile-block {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f7e7cd;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
}

.player-name {
  font-size: 40px;
  color: #935294;
  font-family: SF Pro display;
}

.player-profile {
  font-size: 50px;
}
</style>
