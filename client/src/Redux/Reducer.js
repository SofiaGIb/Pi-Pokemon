import { GET_POKEMONS } from "./actions";

const initialState ={
    poke :[],
};
const reducer = (state =initialState,action)=>{
switch(action.type){
    case GET_POKEMONS:
        console.log(action.payload);
        return {...state,poke:action.payload}
    default:
        return {...state};
}
}
export default reducer;