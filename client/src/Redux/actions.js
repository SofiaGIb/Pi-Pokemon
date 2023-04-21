import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS"

export const getpokemons =()=>{
  return async function (dispatch){
 axios.get("http://localhost:3001/pokemons")
.then((response)=> response.data)
.then((data)=>{
  return dispatch({
    type:GET_POKEMONS , 
    payload: data
  })
})

  }   
}
export const SEARCH_POKEMONS = "SEARCH_POKEMONS"

export const searchpokemons =(name)=>{
  return async function (dispatch){
    try {
 const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
 const response =res.data;
 console.log(response);
  return dispatch({
    type:SEARCH_POKEMONS, 
    payload: response
  })
} catch (error) {
  return alert(error.response.data)
}

  }   
};

export const GET_ALL_TYPES = "GET_ALL_TYPES";

export const getAllTypes = ()=>{
  return async function (dispatch) {
    const json = await axios.get("http://localhost:3001/types");
    const result = json.data;
    return dispatch({
      type:GET_ALL_TYPES,
      payload: result,
    })
  };
};

export const postPokemon = (payload)=>{
  console.log(payload);
  return async function(dispatch){
    const response = await axios.post("http://localhost:3001/pokemons/", payload)
  return response
  }
}