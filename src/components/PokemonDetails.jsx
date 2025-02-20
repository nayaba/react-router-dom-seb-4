import { useParams } from 'react-router-dom'

const PokemonDetails = (props) => {

    const { pokemonId } = useParams()
    
    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === Number(pokemonId)
    ))
    console.log(' PokemonDetails singlePokemon:', singlePokemon)
    

    return (
        <>
            <h2>Pokemon Details</h2>
            <p><strong>Weight:</strong> {singlePokemon.weight} units</p>
            <p><strong>Height:</strong> {singlePokemon.height} increments</p>
        </>
    )
}

export default PokemonDetails