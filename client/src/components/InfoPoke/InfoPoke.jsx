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
        <div className="d">
          <div>
            <img
              className="image-detail"
              src={details.image}
              alt={details.name}
            />
          </div>
          <h1>{details.name}</h1>
          <p>{details.life}</p>
          <p>{details.attack}</p>
          <p>{details.defense}</p>
          <p>{details.speed}</p>
          <ul>{details.types.map((type)=> <li key={type} >{type}</li>)}</ul> 
        </div>
      ) : (
        <h1>...CARGANDO</h1>
      )}
    </>
  );
};

export default PokeDetails;
