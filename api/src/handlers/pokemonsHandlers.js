const {
    idpokemons,
    createpokemons,
    searchByName,
    getAllPokemon
  } = require('../controllers/pokemonscontrollers')


// trae array de pokemons con su info
const getpokemons = async (req,res)=>{
    const {name} = req.query;
    
    try {
        const response = name?  await searchByName(name) : await getAllPokemon();
        res.status(200).json(response);

    } catch (error) {
        
    }    

}; 


// trae el pokemons con el id correspondiente y su info
const pokemonsid = async (req,res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api"
    try {
        const pokemon = await  idpokemons(id,source);
        res.status(200).json(pokemon)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    

};
//crea el pokemon mediante body
const postpokemons =async (req,res)=>{
    const {name,img,vida,ataque,defensa,velocidad,type} = req.body;
    try {
        const newPokemon = await createpokemons(name,img,vida,ataque,defensa,velocidad,type);
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({error : error.message} )
    }

}
module.exports={
getpokemons,
pokemonsid,
postpokemons
}