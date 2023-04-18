 const getAllTypes = require('../controllers/typescontrollers')


 const getType =  async (req,res) => {
try {
    const tipo = await getAllTypes()
    res.status(200).json(tipo)
} catch (error) { 
    res.status(400).json({error: error.message})
}
 }
 module.exports = getType