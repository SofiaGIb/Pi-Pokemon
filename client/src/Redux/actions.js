import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS"

export const getpokemons =()=>{
  return async function (dispatch){
 axios.get("http://localhost:3001/pokemons")
.then((response)=> response.data)
.then((data)=>{
  return dispatch({
    type:GET_POKEMONS , 
    payload :  data
  })
})

  }   
}