const PokemonList = (props) => {
    return (
        <>
            <h2>Pokemon</h2>
            <ul>
                {props.pokemon.map((poke) => (
                    <li key={poke._id}>{poke.name}</li>
                ))}
            </ul>
        </>
    )
}

export default PokemonList