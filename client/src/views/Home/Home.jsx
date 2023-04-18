import CardContainer from "../../components/CardCointeiner/CardCointeiner"
import { useDispatch } from "react-redux"
import { getpokemons } from "../../Redux/actions"
import { useEffect } from "react";

const Home = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getpokemons())
        
    },[dispatch])



    return(
        <div>
            <h1>VISTA DE LA HOME</h1>
            <CardContainer/>

        </div>

    )
}
export default Home