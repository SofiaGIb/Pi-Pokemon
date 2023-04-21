import Card from "../Card/Card";
import style from "./CardCointeiner.module.css";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const poke = useSelector((state) => state.poke);
  return (
    <div className={style.container}>
      {poke ? (
        poke.map((poke) => {
          return (
            <Card name={poke.name} types={poke.types} image={poke.image} />
          );
        })
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
};
export default CardContainer;
