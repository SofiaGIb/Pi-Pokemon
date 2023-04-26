import style from "./Card.module.css"
import {Link} from "react-router-dom"

const Card = ({id,name,image,types})=>{
  return (
    <div className={style.cajacard}>

      <Link to={`/Detail/${id}`}>
      <div className={style.card}>
        <div className={style.name}>{name}</div>
        <div
        className={style.type}>
       <ul>{types.map((type)=> <li key={type} >{type}</li>)}</ul> 
      </div>
        <div className={style.img}> <img src={image} alt={name} />
        </div>
     </div>
          </Link>

    </div>
    )
    
    }
     
    export default Card


    //desde aca cambiar la letra 