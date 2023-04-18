const {Router} = require ('express');
const getType = require ('../handlers/typesHandlers')
 
const typesRouter = Router();

typesRouter.get("/", getType)

module.exports = typesRouter