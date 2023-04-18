import Card from "../Card/Card";
import { useSelector} from "react-redux";

const CardContainer =()=>{
    const poke= useSelector(state=>state.poke);
    return (

    <div>
        {poke.map(poke =>{ return <Card
        name= {poke.name}
        types ={poke.types}
        image = {poke.image}
        

        />

        })
}

    </div>
)

} 
export default CardContainer