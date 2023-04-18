import { GET_POKEMONS } from "./actions";

const initialState ={
    poke :[],
};
const rootReducer = (state =initialState,action)=>{
switch(action.type){
    case GET_POKEMONS:
        return {...state,poke}
    default:
        return {...state};
}
}
export default rootReducer;