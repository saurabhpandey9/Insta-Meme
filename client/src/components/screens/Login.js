import react from 'react';
import '../../App.css';
import {useState,useContext}from 'react';
import { Link,useHistory } from 'react-router-dom';
import M from 'materialize-css';

import { userContext } from '../../App';

const Login = () => {

    const {state,dispatch} =useContext(userContext);

    const history = useHistory();
    const mail_validatorconst= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

    const LoginData = ()=>{

        if (!mail_validatorconst.test(email)){
            M.toast({html:"Invaid Email type"});
            return
        }      

        fetch("/signin",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password
            })

        }).then(res=>res.json()
        .then(data=>{
            if (data.success) {
                localStorage.setItem('jwt',data.token);
                localStorage.setItem('user',JSON.stringify(data.user));
                dispatch({type:"USER",payload:data.user})

                M.toast({html:data.message,classes:'green'});
                history.push('/');
            }
            else{
                M.toast({html:data.message,classes:'red'});
            }
            
        }));

    }



    return (

        <div className="my-card">
            <div className="card auth-card">
                <h3>Login</h3>
                <input className="input-field" type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1" onClick={()=>LoginData()}>Login</button>

                <h6><Link to="/signup">Don't have account ?</Link></h6>
            </div>
        </div>

    );
}

export default Login;