import React,{useState} from "react";




export default function SignUp({ facade })
{
    
    const init = { login_name: "", password: "" };
    const [Credentials, setCredentials] = useState(init);

    const create = (evt) =>
    {
        evt.preventDefault();
        facade.createUser(Credentials.login_name, Credentials.password)
    }
    const onChange = (evt) =>
    {
        setCredentials({ ...Credentials, [evt.target.id]: evt.target.value })
    }



    return (
        <div style={{textAlign:"center"}}>
          
            <h2>Sign up</h2>
            
           
            <form onChange={onChange} >
          <input className="login-input"  placeholder="User Name" id="login_name" />
          <input className="login-input"  type="password" placeholder="Password" id="password" />
          <button className="login-btn" onClick={create}>Create</button>
        </form>
            
            
        </div>
    )

}