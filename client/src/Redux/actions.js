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

export const getTypes = ()=>{
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

export  const FILTRAR_POR_TIPO = "FILTRAR_POR_TIPO";
export const filtrarportipo = (payload) => {
  return {
    type: FILTRAR_POR_TIPO,
    payload: payload,
  };
};


export const CLEAN_DETAIL  = "CLEAN_DETAIL";
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};


export const DETAIL_POKE = "DETAIL_POKE";
export const detailPoke = (id) => {
  return function (dispatch) {
    axios(`http://localhost:3001/pokemons/${id}`)
      .then((response) => response.data)
      .then((data) => {
        return dispatch({
          type: DETAIL_POKE,
          payload: data,
        });
      });
  };
};

export const FILTRO_ATAQUE = "FILTRO_ATAQUE";
export const filtroAtaque = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_ATAQUE,
      payload: payload,
    });
  };
};
export const FILTRO_NAME = "FILTRO_NAME";
export const filtroName = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_NAME,
      payload: payload,
    });
  };
};
export const FILTRO_APIBDD = "FILTRO_APIBDD";
export const filtroApiBdd = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: FILTRO_APIBDD,
      payload: payload,
    });
  };
};