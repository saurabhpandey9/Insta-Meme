import react from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="my-card">
            <div className="card auth-card">
                <h3>Signup</h3>
                <input className="input-field" type="text" placeholder="Name" />
                <input className="input-field" type="email" placeholder="Email" />
                <input className="input-field" type="password" placeholder="Password" />
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1">Sign up</button>
                <h6><Link to="/login">Already have account ?</Link></h6>
            </div>
        </div>

    );
}

export default Signup;