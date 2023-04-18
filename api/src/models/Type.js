const {DataTypes} = require('sequelize');


module.exports = (sequelize) =>{
sequelize.define ('Type',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name: {
        type : DataTypes.STRING,
        allownull : false,
    }
},
{timestaps : false}
)}

/* const baseDtypes = await Type.findAll();

if (baseDtypes.length === 0) {
    const allTypes = await axios.get("https://pokeapi.co/api/v2/type");
    const results = allTypes.data.results;

    const copyDb = results.map((elem) => {
      Type.create({
        name: elem.name,
      });
    });
    return results;
  } else {
    return baseDtypes;
  } */