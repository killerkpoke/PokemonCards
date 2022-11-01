<script lang="ts">
import { defineComponent } from "vue";
import PokeApi from "@/services/PokeApi";
import type Pokemon from "@/types/Pokemon";
import type PokemonTM from "@/types/PokemonTM";
import { EMPTY_OBJ } from "@vue/shared";

export default defineComponent({
  data() {
    return {
      pokemon: {} as Pokemon,
      pokemonTM: {} as PokemonTM,
    };
  },
  methods: {
    getPokemon(name: string) {
      PokeApi.get(name)
        .then((response: any) => {
          this.pokemon = response.data;
          console.log(this.pokemon);

          const getRandomElement = (arr: any[]) =>
            arr.length
              ? arr[Math.floor(Math.random() * arr.length)]
              : undefined;
          const str = getRandomElement(this.pokemon.moves).move.url;
          const move_id = str.split("/");
          this.getSkill(move_id[6]);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    getSkill(id: number) {
      PokeApi.getTm(id)
        .then((response: any) => {
          this.pokemonTM = response.data;
          console.log(this.pokemonTM);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
});
</script>

<template>
  <main class="m-8">
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
    <div v-if="pokemon.id == null" class="flex items-center justify-center">
      <div
        class="font-semibold text-xl inline-flex items-center capitalize text-center border border-sky-700 ring-4 rounded-xl p-4 text-green-300 bg-sky-700"
      >
        <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <label>Processing...</label>
      </div>
    </div>
    <div
      v-else-if="pokemon.id != null"
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
        <img
          class="w-screen h-max bg-contain text-black"
          alt="pokepics"
          :src="pokemon.sprites.front_default"
        />
      </div>
      <div class="text-black">
        <div
          id="moves"
          class="grid grid-cols-2 grid-rows-2 text-center capitalize"
        >
          <!-- Attack -->
          <!-- name, url.power, url.accuracy, url.type.name -->
          <div>
            <strong>move name:</strong>
            <div v-if="pokemonTM.name">
              {{ pokemonTM.name }}
            </div>
            <div v-else class="font-semibold">-</div>
          </div>
          <div>
            <strong>move power:</strong>
            <div v-if="pokemonTM.power">
              {{ pokemonTM.power }}
            </div>
            <div v-else class="font-semibold">-</div>
          </div>
          <div>
            <strong>move accuracy:</strong>
            <div v-if="pokemonTM.accuracy">
              {{ pokemonTM.accuracy }}
            </div>
            <div v-else class="font-semibold">-</div>
          </div>
          <div>
            <strong>move pp:</strong>
            <div v-if="pokemonTM.pp">
              {{ pokemonTM.pp }}
            </div>
            <div v-else class="font-semibold">-</div>
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
