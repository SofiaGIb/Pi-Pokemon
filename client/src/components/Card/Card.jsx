const Card = (props)=>{
    return (
     <div>
        <p>name:{props.name}</p>
        <p>tipo:{props.types}</p>
         <img src={props.image} alt={props.name} />
    
     </div>
    
    )
    
    }
     
    export default Card


    //desde aca cambiar la letra 