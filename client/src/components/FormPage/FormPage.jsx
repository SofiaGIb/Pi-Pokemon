
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../Redux/actions";
import { useState,useEffect } from "react";
import { getAllTypes } from "../../Redux/actions";


const FormPage= () => {
  const [createPokemon, setCreatePokemon] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [error, setError] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const dispatch = useDispatch();
  const allTypes = useSelector((state) => state.allTypes);


  const inputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setCreatePokemon({ ...createPokemon, [property]: value });
/*     setError( validation ({ ...createPokemon, [property]: value }));
 */  };
 useEffect(() => {
   dispatch(getAllTypes());
 }, [dispatch]);



  const typeChange = (event) => {
    const value = event.target.value;
    if (!createPokemon.types.includes(value)) {
      setCreatePokemon({
        ...createPokemon,
        types: [...createPokemon.types, value],
      });
    }
  };
  const onSubmit = () => {
    if (
      createPokemon.name &&
      createPokemon.image &&
      createPokemon.life &&
      createPokemon.attack &&
      createPokemon.types
    ) {
      dispatch(postPokemon(createPokemon));
    } else {
      alert("faltan datos para crear el pokemon ");
    }
  };
console.log(createPokemon);
  return (
    <div>
      <form>
        <h3>Create Pokemon</h3>
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            value={createPokemon.name}
            onChange={inputChange}
          />
          <p>{error.name}</p>
        </div>
        <div>
          <label htmlFor="image">Link imagen</label>
          <input
            type="text"
            name="image"
            value={createPokemon.image}
            onChange={inputChange}
          />
          <p>{error.image}</p>
        </div>
        <div>
          <label htmlFor="life">Vida</label>
          <input
            type="text"
            name="life"
            value={createPokemon.life}
            onChange={inputChange}
          />
          <p>{error.life}</p>
        </div>
        <div>
          <label htmlFor="attack">Ataque</label>
          <input
            type="text"
            name="attack"
            value={createPokemon.attack}
            onChange={inputChange}
          />
          <p>{error.defense}</p>
        </div>
        <div>
          <label htmlFor="defense">Defensa</label>
          <input
            type="text"
            name="defense"
            value={createPokemon.defense}
            onChange={inputChange}
          />
          <p>{error.defense}</p>
        </div>
        <div>
          <label htmlFor="speed">Speed</label>
          <input
            type="text"
            name="speed"
            value={createPokemon.speed}
            onChange={inputChange}
          />
          <p>{error.speed}</p>
        </div>
        <label>
          Escoger tipo -
          <select onChange={(event) => typeChange(event)}>
            {allTypes.map((type) => (
              <option value={type.name} id={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </label>
        {createPokemon.types.length > 0 &&
          createPokemon.types.map((type) => <span key={type}>*{type}</span>)}
        <button onlick={() => onSubmit()}>AGREGAR</button>
      </form>
    </div>
  );
};
export default FormPage;
