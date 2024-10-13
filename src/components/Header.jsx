import { Link } from 'react-router-dom';
import './Header.css'

function Header (){
    return(
        <div className="Header">
            <Link to="/"> HOME </Link>
            <span className='mt-3' >SELL & PURCHASE ONLINE ... in your college</span> 
            <Link to="/Login"> LOGIN </Link>
        </div>
    )
}

export default Header;
