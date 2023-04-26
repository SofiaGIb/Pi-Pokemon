import style from "./InfoPoke.module.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { cleanDetail,detailPoke } from "../../Redux/actions";

const PokeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.pokeDetail);
console.log(details);
  useEffect(() => {
    dispatch(detailPoke(id));

    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  return (
    <>
      { Object.keys(details).length ? (
        <div 
          className={style.imgdetail}>
          <div>
            <img
              src={details.image}
              alt={details.name}
            />
          </div > 
          <div className={style.textoefectos}>

          <h1> Name : {details.name}</h1>
          <p>Life: {details.life}</p>
          <p> Attack: {details.attack}</p>
          <p>Defense : {details.defense}</p>
          <p>Speed : {details.speed}</p>
          <ul> Type {details.types.map((type)=> <li key={type} >{type}</li>)}</ul> 

          </div>
        </div>
      ) : (
        <h1>...CARGANDO</h1>
      )}
    </>
  );
};

export default PokeDetails;
