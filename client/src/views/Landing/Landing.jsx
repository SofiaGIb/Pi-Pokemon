import { Link } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = () => {
  return (

      <div  className={style.principal} >
            <Link to="/home">
              <button className={style.button1 }>GO HOME</button>
            </Link>
        </div>

  );
};

export default Landing;
