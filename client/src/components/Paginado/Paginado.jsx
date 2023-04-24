import style from "./pagina.module.css"

const Paginado = ({ poke, pokepag, paginado }) => {
  const numpag = [];
  for (let i = 1; i <= Math.ceil(poke / pokepag); i++) {
    numpag.push(i);
  }
  return (
    <div className={style.paginado} >
      <ul className={style.ul}>
        { 
        numpag && numpag.map((num)=>{
           return ( <li className={style.li} key={num}>
<button  className={style.button} onClick={()=>paginado(num)} >{num} </button>

            </li>)
        })
        }
      </ul>
    </div>
  );
};

export default Paginado;
