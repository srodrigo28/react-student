import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cadastro'>Cadastro</Link>
            <Link to='/login'>Login</Link>
        </div>
    )
}