import axios from 'axios'
import { ref } from 'vue'

const usePokemon = ( pokemonId = '1' ) => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async() => {

        isLoading.value = true
        pokemon.value = null

        try {

            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`)
            pokemon.value = data
            errorMessage.value = ''

            console.log(pokemon)
            
        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese Pokémon.'
        }

        isLoading.value = false

    }

    searchPokemon()

    return {
        errorMessage,
        isLoading,
        pokemon,
    }

}

export default usePokemon