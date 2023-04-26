import style from "./input.module.css";
import { useState } from "react";
import { searchpokemons } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const Searchpoke = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handlerSearchName = (event) => {
    setName(event.target.value)
  };

  const searchName = (name) =>{
    console.log(name);
    dispatch(searchpokemons(name));
  }

  return (
    <div className={style.buscar}>
      <input
      className={style.inputs}
        type="text"
        placeholder="Name..."
        onChange={(event) => handlerSearchName(event)}
      />
      <button onClick={() => searchName(name)}
      className={style.buttons}>Buscar</button>
    </div>
  );
};

export default Searchpoke;
