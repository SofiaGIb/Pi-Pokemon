import CardContainer from "../../components/CardCointeiner/CardCointeiner"
import { useDispatch ,useSelector} from "react-redux"
import { getpokemons } from "../../Redux/actions"
import { useEffect,useState } from "react";
import InputBusqueda from "../../components/InputBusqueda/InputBusqwueda";
import FilterByTypes from "../../components/Filters/FilterByType";
import Paginado from "../../components/Paginado/Paginado";
import FilterAtack from "../../components/Filters/FilterAtack";
import FilterName from "../../components/Filters/FilterName1";
import style from "../../components/Filters/Filtertype.module.css"
import FilterApi from "../../components/Filters/FilterApibdd"


const Home = () =>{

    const dispatch = useDispatch();
    const poke = useSelector((state)=>state.poke);
    const pokeaux = useSelector((state)=>state.pokeaux);
    const [orderAtack,setOrderAtack]=useState("");
    const [nameorder,setnameOrder]=useState("");

    const [numpag,setNumpag]=useState(1);
    const [pokepag,setPokepag] =useState(12);

    const indexlastpoke = numpag * pokepag;
    const indexfirstpoke =indexlastpoke -pokepag;
    const twelvepoke = poke.slice(indexfirstpoke,indexlastpoke)

    const paginado = (namberpage)=>{ 

        setNumpag(namberpage)
    }


    useEffect(()=>{
        dispatch(getpokemons())
        
    },[dispatch])



    return(
        <div>
           <Paginado   poke={poke.length} pokepag={pokepag} paginado={paginado}/>
           <div/> 
            <h1>VISTA DE LA HOME</h1>
            <div>
            <CardContainer twelvepoke={twelvepoke}/>
            </div>

            <div>
            <InputBusqueda/>
            </div>

            <div>
             <FilterByTypes  setNumpag={setNumpag}/>
            </div>
             <div>
                <FilterAtack setNumpag={setNumpag} orderAtack={orderAtack} setOrderAtack={setOrderAtack}/>
             </div>

            <div className={style.filtro2} >

            <FilterName setNumpag={setNumpag} nameorder={nameorder} setnameOrder={setnameOrder}/>
            </div>

            <div className={style.filtro3}>
                <FilterApi setNumpag={setNumpag}/>
            </div>
        </div>

    )
}
export default Home