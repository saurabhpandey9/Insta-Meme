import react, { useContext } from 'react';
import '../App.css';
import { Link ,useHistory} from 'react-router-dom';
import { userContext } from '../App';
import userEvent from '@testing-library/user-event';


const NavBar = () => {
    const { state, dispatch } = useContext(userContext);
    const history =useHistory();

    const renderList = () => {
        
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>,
                <li onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history.push('/login')
                }}>Signout</li>
            ]
        }
        else {
            return [
                <li><Link to="/login">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper orange" >
                <Link to={state?"/":"/login"} className="brand-logo left">InstaMeme</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {renderList()}
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;