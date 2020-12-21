import react from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <nav>
            <div className="nav-wrapper orange" >
                <Link to="/" className="brand-logo left">InstaMeme</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;