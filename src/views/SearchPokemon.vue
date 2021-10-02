<template>
  <h1>Buscar Pokémon: </h1>
  <form @submit.prevent="onSubmit">
      <input
        type="number"
        placeholder="Número del Pokémon"
        autofocus
        v-model="pokemonId"
      >
  </form>
  <br>
  <span>Presione enter para buscar</span>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {

        const router = useRouter()

        const pokemonId = ref(1)

        return {
            pokemonId,

            onSubmit: () => {
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
            }
        }

    }
}
</script>
