import style from "./NavBar.module.css"
import { Link } from "react-router-dom"
const NavBar = ()=>{ 
    return(
        <div className={ style.navbar }>

            <Link to="/Home">HOME</Link>
    
            <Link to="/Form">FORM</Link>      
            
        </div>
    )
}
export default NavBar