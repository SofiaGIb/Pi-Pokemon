export const validation = (creatNewPokemon) => {
    let regexName = /^[a-z]+$/;
    let regexImg =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
    let rexNum = /^([0-9])*$/;  
  
    let errors = {};
    //! validation name
    if (!creatNewPokemon.name)
      errors.name = "El nombre de usuario no debe estar vacio";
    else if (!regexName.test(creatNewPokemon.name))
      errors.name = "Nombre no puede tener numero";
    else if (creatNewPokemon.name !== creatNewPokemon.name.toLowerCase())
      errors.name = "El nombre no puede tener mayusculas";
  
    //!Validation link Image
    if (creatNewPokemon.image) {
      if (!regexImg.test(creatNewPokemon.image))
        errors.image = "Tiene que ser un Link de Imagen";
    }
  
    //! validation vida
    if(creatNewPokemon.life){
      if(!rexNum.test(creatNewPokemon.life)) errors.life= "Solo numeros"
    }
  
    //!validation attack
    if(creatNewPokemon.attack){
      if(!rexNum.test(creatNewPokemon.attack)) errors.attack= "Solo numeros"
    }
  
    //!validation defense
    if(creatNewPokemon.defense){
      if(!rexNum.test(creatNewPokemon.defense)) errors.defense = "solo numeros"
    }  
  
    //!validation spped
      if(creatNewPokemon.speed){
        if(!rexNum.test(creatNewPokemon.speed)) errors.speed = "solo numeros"
      }  
  
    return errors;
  };
  