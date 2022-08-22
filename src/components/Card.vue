<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    pokemon_name: String,
    pokemon_ability_name: String,
    pokemon_height: Number,
    pokemon_weight: Number,
    pokemon_moves: Array,
    pokemon_stats: Array,
    pokemon_types: Array,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-top">
      <div id="pokemon-name">Charizard</div>
      <div id="stat-hp">120</div>
    </div>
    <div class="card-img">
      <!-- pokemon image -->
    </div>
    <div class="card-middle">
      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
        <!-- stats -->
      </div>
      <div>
        <!-- Attack 1 -->
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  font-size: 16px;
}
.card {
  border: 10px yellow solid;
}
.card-top {
  display: flex;
  font-size: 32px;
}
#pokemon-name {
  float: left;
  margin-right: 10px;
}
#stat-hp {
  float: right;
}
</style>
