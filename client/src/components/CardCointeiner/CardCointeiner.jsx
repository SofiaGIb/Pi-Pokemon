import Card from "../Card/Card";
import style from "./CardCointeiner.module.css";



const CardContainer = ({twelvepoke}) => {
  return (
    <div className={style.container}>
      {twelvepoke? (
        twelvepoke.map((poke) => {
          return (
            <Card 
            name={poke.name}
             types={poke.types}
              image={poke.image}
              id={poke.id} 
              key={poke.id}/>
          );
        })
      ) : (
        <h1>Cargando</h1>
      )}
    </div>
  );
};
export default CardContainer;
