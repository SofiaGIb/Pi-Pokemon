import style from "./Card.module.css"

const Card = (props)=>{
    return (
     <div className={style.card}>
        <div className={style.name}>name:{props.name}</div>
        <div
        className={style.type}>type:{props.types}</div>
        <div className={style.img}> <img src={props.image} alt={props.name} /></div>
     </div>
    
    )
    
    }
     
    export default Card


    //desde aca cambiar la letra 