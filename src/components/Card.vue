<script lang="ts">
import { defineComponent, ref } from "vue";
import PokeApi from "@/services/PokeApi";
import type Pokemon from "@/types/Pokemon";
import type PokemonTM from "@/types/PokemonTM";

export default defineComponent({
  data() {
    // const poke_url = "https://pokeapi.co/api/v2/pokemon/eevee";
    // const getRandomElement = (arr: any[]) => arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined;

    return {
      pokemon: {} as Pokemon,
      pokemonTM: {} as PokemonTM,
    };
  },
  methods: {
    getPokemon(name: string) {
      PokeApi.get(name)
        .then((response) => {
          this.pokemon = response.data;
          console.log(this.pokemon);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getSkill(id: number) {
      PokeApi.getTm(id)
        .then((response) => {
          this.pokemonTM = response.data;
          console.log(this.pokemonTM);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getPokemon("eevee");
    //this.getPokemon("eevee"); //this.$route.params.name);
    this.getSkill(19);
  },
});
</script>

<template>
  <main>
    <div class="mb-12 grid justify-center">
      <label
        for="first_name"
        class="block mb-2 text-lg text-center font-medium text-gray-900 dark:text-gray-300"
        >Search a Pokemon</label
      >
      <input
        type="text"
        id="first_name"
        class="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        placeholder="ex. Zapdos"
        required
        v-model="pokemon.name"
        @change="getPokemon(pokemon.name)"
      />
    </div>
    <div
      class="mx-auto md:mx-40 ring-8 ring-yellow-400 ring-offset-4 rounded-lg shadow-2xl shadow-white/25 bg-slate-100"
    >
      <div class="flex p-2 text-black text-lg">
        <div id="pokemon-name" class="font-semibold flex-auto capitalize">
          {{ pokemon.name }}
        </div>
        <div
          v-for="(item, k) in pokemon.types"
          :key="k"
          id="pokemon-type"
          class="font-semibold flex-none"
        >
          [{{ item.type.name }}]
        </div>
      </div>
      <div class="mt-1 mx-1 border border-black bg-black rounded-full"></div>
      <div class="m-4 border-4 border-yellow-500/50 rounded-md">
        <!-- pokemon image -->
        <div v-for="(item, k) in pokemon.sprites" :key="k">
          <img
            class="w-screen h-max bg-contain"
            alt="pokepics"
            :src="pokemon.sprites.front_default"
          />
        </div>
      </div>
      <div class="text-black">
        <div
          id="moves"
          class="grid grid-cols-2 grid-rows-2 text-center capitalize"
        >
          <!-- Attack -->
          <!-- name, url.power, url.accuracy, url.type.name -->
          <div>
            <div class="font-semibold">move name:</div>
            <div class="font-semibold">{{ pokemonTM.name }}</div>
          </div>
          <div>
            <div class="font-semibold">move power:</div>
            <div class="font-semibold">{{ pokemonTM.power }}</div>
          </div>
          <div>
            <div class="font-semibold">move accuracy:</div>
            <div class="font-semibold">{{ pokemonTM.accuracy }}</div>
          </div>
          <div>
            <div class="font-semibold">move pp:</div>
            <div class="font-semibold">{{ pokemonTM.pp }}</div>
          </div>
        </div>
      </div>
      <div
        id="divider"
        class="m-2 border border-2 border-red-400 bg-red-400"
      ></div>
      <div class="text-black p-2">
        <div class="grid grid-cols-3 grid-rows-3 text-center">
          <div
            v-for="(item, k) in pokemon.stats"
            :key="k"
            id="stats"
            class="capitalize"
          >
            <strong>{{ item.stat.name }}</strong>
            <div>{{ item.base_stat }}</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
