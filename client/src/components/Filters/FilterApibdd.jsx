import { useDispatch } from "react-redux";
import {filtroApiBdd} from "../../Redux/actions"

const filterApibdd = ({setNumpag})=>{
 const dispatch = useDispatch();

 const filterAB= (event)=>{
    dispatch(filtroApiBdd(event.target.value))
    setNumpag(1)
 }

    return (


        <div>
            <label htmlFor="">
                <select onChange={(event)=>filterAB(event)}>
            <option value="all">all</option>
            <option value="true">bdd</option>
            <option value="false">api</option>

                </select>
            </label>
        </div>
    )
}

export default filterApibdd


