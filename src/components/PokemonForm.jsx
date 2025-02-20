import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonForm = (props) => {

    const navigate = useNavigate()

    const initialState = {
        name: '',
        weight: '',
        height: 0,
    }

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPokemon(formData)
        setFormData(initialState)
        navigate('/pokemon')
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"
            />
            <label>Weight:</label>
            <input 
            type="text"
            onChange={handleChange}
            value={formData.weight}
            name="weight"
            />
            <label>Height:</label>
            <input 
            type="number"
            onChange={handleChange}
            value={formData.height}
            name="height"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default PokemonForm