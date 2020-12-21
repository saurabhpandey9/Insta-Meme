import react from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (

        <div className="my-card">
            <div className="card auth-card">
                <h3>Login</h3>
                <input className="input-field" type="text" placeholder="Email" />
                <input className="input-field" type="password" placeholder="Password" />
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1">Login</button>

                <h6><Link to="/signup">Don't have account ?</Link></h6>
            </div>
        </div>

    );
}

export default Login;