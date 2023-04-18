import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS"

const getpokemons =()=>{
    return async (dispatch)=>{

          const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon");
        }

const pokemons = pokemons.data;
dispatch({type : GET_POKEMONS, payload:pokemons})
    
}