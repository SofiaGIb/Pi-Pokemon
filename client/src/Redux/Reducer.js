import {
  GET_POKEMONS,
  SEARCH_POKEMONS,
  GET_ALL_TYPES,
  FILTRAR_POR_TIPO,
  CLEAN_DETAIL,
  DETAIL_POKE,
  FILTRO_ATAQUE,
  FILTRO_NAME,
  FILTRO_APIBDD
} from "./actions";

const initialState = {
  poke: [],
  pokeaux: [],
  allTypes: [],
  pokeDetail: {},
  allPoke:[]
};
const reducer = (state = initialState, action) => {
  const allPoke = state.allPoke;
  switch (action.type) {
    case GET_POKEMONS:
      return { ...state, 

        poke: action.payload ,
        allPoke:action.payload,
        pokeaux: action.payload,
      }

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

    case FILTRAR_POR_TIPO:
      const PokeTypes = allPoke;
      const Filtro =
        action.payload === "All"
          ? PokeTypes
          : PokeTypes.filter((el) => el.types.includes(action.payload));
      return {
        ...state,
        poke: Filtro,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        pokeDetail: {},
      };

    case DETAIL_POKE:
      return {
        ...state,
        pokeDetail : action.payload,
      };
      
      case FILTRO_ATAQUE:
        const FiltroAtaque = allPoke.sort((pokeA, pokeB) => {
          if (action.payload === "up") return pokeA.attack - pokeB.attack;
          return pokeB.attack - pokeA.attack;
        });
        return {
          ...state,
          poke: FiltroAtaque,
        };

        case FILTRO_NAME:
          const filtroName = allPoke.sort((pokeA, pokeB) => {
            if (action.payload === "up") 
            return pokeA.name.toLowerCase() < pokeB.name.toLowerCase()?-1:0;
            return pokeB.name.toLowerCase() < pokeA.name.toLowerCase()?-1:0;
          });
          return {
            ...state,
            poke: filtroName,
          };
  
          case FILTRO_APIBDD:
            const pokemonsaux = state.pokeaux;
            const filtroBddApi = state.poke.filter((poke)=> poke.created.toString() === action.payload.toString())
            return {
              ...state,
              poke : action.payload ==="all" ? pokemonsaux : filtroBddApi
            }

    default:
      return { ...state };
  }
};

export default reducer;
