import { GET_POKEMONS, SEARCH_POKEMONS, GET_ALL_TYPES } from "./actions";

const initialState = {
  poke: [],
  pokeaux: [],
  allTypes: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, pokeaux: action.payload, poke: action.payload };

    case SEARCH_POKEMONS:
      console.log(action.payload);
      return {
        ...state,

        poke: action.payload,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };

    default:
      return { ...state };
  }
};
export default reducer;
