const {Router} = require ('express');
const {
  getpokemons,
  pokemonsid,
  postpokemons
} = require ("../handlers/pokemonsHandlers")

 const pokemonsRouter = Router ();  

 pokemonsRouter.post("/",postpokemons)

 pokemonsRouter.get("/",getpokemons)

 pokemonsRouter.get("/:id",pokemonsid)

module.exports = pokemonsRouter;