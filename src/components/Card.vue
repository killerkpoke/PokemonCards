<script lang="ts">
import { defineComponent, ref } from "vue";

import axios from "axios";
export default defineComponent({
  data() {
    const poke_url = "https://pokeapi.co/api/v2/pokemon/charizard";
    axios
      .get(poke_url)
      .then((res) => {
        const adat = ref(res.data);

        this.pokemon_name = adat.value.name;
        // pokemon_ability_name: [],
        this.pokemon_height = adat.value.height;
        this.pokemon_weight = adat.value.weight;
        this.pokemon_stat_hp = adat.value.stats.hp;

        //console.log(adat.value.stats); // 6 db statunk van        
        //console.log(adat.value.stats[0].base_stat);
        
        //for(let i = 0; i < adat.value.stats.length; i++) { // computed method-ban kell szamolni, hogy keves maradjon a request.
          console.log(adat.value.stats[1].base_stat);
          
       // }

        
        
        // pokemon_moves: [],
        // pokemon_stats: [],
        // pokemon_types: [],
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      pokemon_name: this.pokemon_name,
      pokemon_height: this.pokemon_height,
      pokemon_weight: this.pokemon_weight,

    };
  },
  // computed() {

  // }
});
</script>

<template>
  <div class="card">
    <!-- <ul v-if="!loading && data">
      <li v-for="item of data" v-bind:key="item">
        <p>
          <strong>{{ item }}</strong>
        </p>
        <p></p>
      </li>
    </ul>
  -->
    <p>{{ pokemon_name }}</p>
    <p>{{ pokemon_height }}</p>
    <p>{{ pokemon_weight }}</p>
    
    <p ref="error">{{}}</p>
    <div class="card-top">
      <div id="pokemon-name">Charizard</div>
      <div id="stat-hp">120</div>
      <div id="pokemon-type">Fire/Fly</div>
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
