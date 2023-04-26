import style from "./Filtertype.module.css";
import { useSelector, useDispatch } from 'react-redux'
import { getTypes,filtrarportipo } from '../../Redux/actions'; 
 import { useEffect } from 'react';




const FilterByTypes= ({setNumpag}) =>{
    const dispatch = useDispatch()
    const allTypes = useSelector((state) => state.allTypes)
  
    useEffect(()=>{
      dispatch(getTypes())
    },[dispatch])
  
    const FilterTypes = (event) =>{
      event.preventDefault()
      dispatch(filtrarportipo(event.target.value))
      setNumpag(1)
    }
  
    return (
      <div className={style.filtroT}>
        <label >
          Por Tipo -
          <select className={style.opciones} onChange={(event)=>FilterTypes(event)}>
            <option  value="All">Todos</option>
            {
              allTypes.map((type)=>
                ( 
                  <option value={type.name} key={type.id}>{type.name}</option>
                )
              )
            }
          </select>
        </label>
      </div>
    )
  };
  
  export default FilterByTypes;