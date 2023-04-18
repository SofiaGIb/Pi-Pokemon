const { Type } = require ('../db');
const axios = require ('axios') ;

const getAllTypes=  async () =>{

    const bdType = await Type.findAll();
     
    if(bdType.length === 0 ){
     const type = await axios.get("https://pokeapi.co/api/v2/type");
     const results =  type.data.results;

        const copBd = results.map((elem) =>{
            Type.create ({
                name : elem.name,
            });
        });
        return results;
        } else { return bdType }
        
}


module.exports  = getAllTypes

// 