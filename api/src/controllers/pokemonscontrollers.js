const { Pokemon , Type} = require ('../db'); 
const axios = require ('axios');

//trae todos los pokemons 

const searchByName = async (name) => {
    let nameLower = name.toLowerCase()
    const pokemonListDb = await Pokemon.findAll({
      where: { name : nameLower },
      include :{
        model: Type,
        attributes: ["name"],
        through:{
          attributes: []
        }
      }
    });
  
    const pokemonListApi = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nameLower}`)
      .then((response) => {
        const pokeApiData = response.data;
  
        const poke = {
          id: pokeApiData.id,
          name: pokeApiData.name,
          image: pokeApiData.sprites.other["official-artwork"].front_default,
          life: pokeApiData.stats[0].base_stat,
          attack: pokeApiData.stats[1].base_stat,
          defense: pokeApiData.stats[2].base_stat,
          speed: pokeApiData.stats[5].base_stat,
          height: pokeApiData.height,
          weight: pokeApiData.weight,
          types: pokeApiData.types.map((type) => type.type.name),
          created: false,
        };
  
        return [poke];
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          return [];
        } else {
          throw error;
        }
      });
  
    return pokemonListDb.concat(pokemonListApi);
  };

  const getAllPokemon = async () => {
    //!API
    const allPokemons = (await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=60`)).data.results
    const promesaTodo = await Promise.all(
      allPokemons.map(async(poke)=>{
        return await promesaName(poke.name)
      })
    )
    //! BD
    const allPokemonsData = await Pokemon.findAll({
      include:{
        model: Type,
        attributes: ["name"],
        through:{
          attributes: []
        }
      }
    })
    //!LIMPIADOR
    const cleanTypes = allPokemonsData.map((pokemon) =>{
      const dbType = {
        id : pokemon.id,
        name : pokemon.name,
        image : pokemon.image,
        life: pokemon.life,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.Types.map(t => t.name),
        created : true
      }
      return dbType
    })
  
    return cleanTypes.concat(...promesaTodo)
  };

// trae pokemons con id
const idpokemons=  async ( id ,source)=>{
    if(source === "api"){ 
        const  pokemon = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
        
        const  dataClean = {
           id : pokemon.id,
           name : pokemon.name,
           image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
           life: pokemon.stats[0].base_stat,
           attack: pokemon.stats[1].base_stat,
           defense: pokemon.stats[2].base_stat,
           speed: pokemon.stats[5].base_stat,
           height: pokemon.height,
           weight: pokemon.weight,
           types: pokemon.types.map((type) => type.type.name),
           
        }
        return dataClean;
    }
    else {return await   Pokemon.findByPk(id)
    }; 

};

// crea el pokemons con body
const createpokemons = async (name,img,vida,ataque,defensa,velocidad,type)=>{
 const newPokemon = await Pokemon.create({name,img,vida,ataque,defensa,velocidad});
  
 newPokemon.addType(
    type 
 )
 return newPokemon;
} 
const promesaName = async(name) =>{
    const pokemonListApi = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        const pokemonApiData = response.data;
  
        const poke = {
          id: pokemonApiData.id,
          name: pokemonApiData.name,
          image: pokemonApiData.sprites.other["official-artwork"].front_default,
          life: pokemonApiData.stats[0].base_stat,
          attack: pokemonApiData.stats[1].base_stat,
          defense: pokemonApiData.stats[2].base_stat,
          speed: pokemonApiData.stats[5].base_stat,
          height: pokemonApiData.height,
          weight: pokemonApiData.weight,
          types: pokemonApiData.types.map((type) => type.type.name),
          created: false,
        };
  
        return [poke];
      })
      return pokemonListApi
  }
module.exports = {
    idpokemons, 
    createpokemons,
    searchByName,
    getAllPokemon
}


