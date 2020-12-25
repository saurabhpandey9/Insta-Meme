import {useState}from 'react';
import { Link,useHistory } from 'react-router-dom';
import M from 'materialize-css';




const Signup = () => {
    const mail_validatorconst= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [name,setName]=useState("");
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();

    const PostData = ()=>{

        if (!mail_validatorconst.test(email)){
            M.toast({html:"Invaid Email type"});
            return
        }      

        fetch("/signup",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                password
            })

        }).then(res=>res.json()
        .then(data=>{
            if (data.success) {
                M.toast({html:data.message,classes:'green'});
                history.push('/login');
            }
            else{
                M.toast({html:data.message,classes:'red'});
            }
            
        }));

    }


    return (
        <div className="my-card">
            <div className="card auth-card">
                <h3>Signup</h3>
                <input className="input-field" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                <input className="input-field" type="text" placeholder="Username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <input className="input-field" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn waves-effect waves-light #1e88e5 blue darken-1" onClick={()=>PostData()}>Sign up</button>
                <h6><Link to="/login">Already have account ?</Link></h6>
            </div>
        </div>

    );
}

export default Signup;