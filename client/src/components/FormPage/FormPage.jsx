
import style from "./FormPage.module.css"
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../../Redux/actions";
import { useState,useEffect } from "react";
import { getTypes } from "../../Redux/actions";


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
    setError( validation ({ ...createPokemon, [property]: value }));
   };
 useEffect(() => {
   dispatch(getTypes());
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
    <div className={style.imgfor}>
      <h3 className={style.titulo}>C R E A T E      Y O U      P O K E M O N</h3>
      <form className={style.containerf}>
        <div>
          <label htmlFor="name"  className={style.label}>Nombre</label>
          <input
          className={style.input}
            type="text"
            name="name"
            value={createPokemon.name}
            onChange={inputChange}
          />
          <p className={style.error}>{error.name}</p>
        </div>
        <div>
          <label htmlFor="image"  className={style.label}>Link imagen</label>
          <input className={style.input}
            type="text"
            name="image"
            value={createPokemon.image}
            onChange={inputChange}
          />
          <p className={style.error}>{error.image}</p>
        </div>
        <div>
          <label htmlFor="life" className={style.label}>Vida</label>
          <input
          className={style.input}
            type="text"
            name="life"
            value={createPokemon.life}
            onChange={inputChange}
          />
          <p className={style.error}>{error.life}</p>
        </div>
        <div>
          <label htmlFor="attack" className={style.label}>Ataque</label>
          <input
          className={style.input}
            type="text"
            name="attack"
            value={createPokemon.attack}
            onChange={inputChange}
          />
          <p className={style.error}>{error.defense}</p>
        </div>
        <div>
          <label htmlFor="defense" className={style.label}>Defensa</label>
          <input className={style.input}
            type="text"
            name="defense"
            value={createPokemon.defense}
            onChange={inputChange}
          />
          <p className={style.error}>{error.defense}</p>
        </div>
        <div>
          <label htmlFor="speed" className={style.label}>Speed</label>
          <input
          className={style.input}
            type="text"
            name="speed"
            value={createPokemon.speed}
            onChange={inputChange}
          />
          <p className={style.error}>{error.speed}</p>
        </div>
        <label className={style.label}> 
          Escoger tipo -
          <select className={style.opcionesf} onChange={(event) => typeChange(event)}>
            {allTypes.map((type) => (
              <option value={type.name} id={type.id} key={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        
        </label >
        <div>
        <button onClick={() => onSubmit()} className={style.buttoncreate}>CREAR</button>
        </div>
        {createPokemon.types.length > 0 &&
          createPokemon.types.map((type) => <span key={type}>*{type}</span>)}
      </form>
    </div>
  );
};
export default FormPage;
