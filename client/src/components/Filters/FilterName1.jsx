import { useDispatch } from "react-redux";
import { filtroName } from "../../Redux/actions";
import style from "./Filtertype.module.css"


const FilterName = ({setNumpag,nameorder,setnameOrder})=>{
    const dispatch = useDispatch();

    const filterB = (event)=>{
     setnameOrder(event.target.id);
     dispatch(filtroName(event.target.id))
     setNumpag(1)
   
    }
   
    return (
        <div className={style.orderad}>
        <label htmlFor="up">
          <input
            type="radio"
            id="up"
            name="nameorder"
            checked={ nameorder === "up"}
            onChange={(event) => filterB(event)}
          />
           Ascendiente
        </label>
        <label htmlFor="down">
          <input
            type="radio"
            id="down"
            name="nameorder"
            checked={ nameorder === "down"}
            onChange={(event) => filterB(event)}
          />
          Descendiente 
        </label>
      </div>
  

    )
    
}
export default FilterName 