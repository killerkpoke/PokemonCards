<script lang="ts">
import { defineComponent } from "vue";
//import PokeApi from "@/services/PokeApi";
//import Pokemon from "@/types/Pokemon";

export default defineComponent({
  data() {

    // return {
    //   pokemon: {} as Pokemon,
    // };
    /*
    const poke_url = "https://pokeapi.co/api/v2/pokemon/zapdos";
    const getRandomElement = (arr: any[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;
    */
  },
  // methods: {
  //   getPokemon(name: any) {
  //     PokeApi.get(name)
  //       .then((response) => {
  //         this.pokemon = response.data;
  //       })
  //       .catch((e: Error) => {
  //         console.log(e);
  //       });
  //   },
  // },
  // mounted() {
  //   this.getPokemon(this.$route.params.name);
  // },
});
</script>

<template>
  <div
    class="mx-auto md:mx-40 ring-8 ring-yellow-400 ring-offset-4 rounded-lg shadow-2xl shadow-white/25 bg-slate-100"
  >
    <div class="flex p-2 text-black text-lg">
      <div id="stat-hp" class="font-semibold flex-auto">120hp</div>
      <div id="pokemon-name" class="font-semibold flex-auto">Zapdos</div>
      <div id="pokemon-type" class="font-semibold flex-none">Electric/Fly</div>
    </div>
    <div class="mt-1 mx-1 border border-black bg-black rounded-full"></div>
    <div class="m-4 border-4 border-yellow-500/50 rounded-md">
      <!-- pokemon image -->
      <div class="max-w-auto max-h-auto w-4/5 h-4/5">
        <img
          class="h-auto max-h-60 max-w-60 w-auto bg-contain"
          src="../assets/logo.svg"
        />
      </div>
    </div>
    <div class="text-black">
      <div class="grid grid-cols-2 grid-rows-2 text-center">
        <!-- Attacks -->
        <!-- name, url.power, url.accuracy, url.type.name -->
        <div>
          <div class="p-2 font-semibold">Move Name</div>
          <div class="p-2 font-semibold">Move Power</div>
        </div>
        <div>
          <div class="p-2 font-semibold">Move Type</div>
          <div class="p-2 font-semibold">Move Accuracy</div>
        </div>
      </div>
    </div>
    <div class="text-black">
      <div class="grid grid-cols-3 grid-rows-3 text-center">
        <!-- Stats -->
        <div id="stats">
          <strong>stat name</strong>
          <div>value</div>
        </div>
        <div>
          <strong>stat name</strong>
          <div>value</div>
        </div>
        <div>
          <strong>stat name</strong>
          <div>value</div>
        </div>
        <div>
          <strong>stat name</strong>
          <div>value</div>
        </div>
        <div>
          <strong>stat name</strong>
          <div>value</div>
        </div>
        <div>
          <strong>stat name</strong>
          <div>value</div>
        </div>
      </div>
    </div>
  </div>
</template>
