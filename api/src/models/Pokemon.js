const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: { 
      allowNull : false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img :{
      type: DataTypes.STRING, 
      allowNull: true

    },
    vida :{
      type : DataTypes.STRING,
      allowNull: false,

    },

    ataque: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    defensa: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    Velocidad: {
      type : DataTypes.STRING,
      allowNull: true,

    },
  },
  {timestamps : false} 
  
  );
  
};
