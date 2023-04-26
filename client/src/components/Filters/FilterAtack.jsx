import { useDispatch } from "react-redux";
import { filtroAtaque } from "../../Redux/actions"; 
import style from "./Filtertype.module.css"


const FilterAtack = ({setNumpag,orderAtack,setOrderAtack}) => {
  const dispatch = useDispatch();

 const filterB = (event)=>{
  setOrderAtack(event.target.id);
  dispatch(filtroAtaque(event.target.id))
  setNumpag(1)

 }
 
  return (
    <div className={style.filteratack}>
      <label htmlFor="up">
        <input
          type="radio"
          id="up"
          name="orderAtack"
          checked={ orderAtack === "up"}
          onChange={(event) => filterB(event)}
        />
       Atack (-)
      </label>
      <label htmlFor="down">
        <input
          type="radio"
          id="down"
          name="orderAtack"
          checked={ orderAtack === "down"}
          onChange={(event) => filterB(event)}
        />
     Atack(+)
      </label>
    </div>
  );

  };

  export default FilterAtack