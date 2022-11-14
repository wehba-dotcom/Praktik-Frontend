import React,{useState} from "react";




export default function LogIn({ facade, setLoggedIn, setErrorMessage })
{
    
    const init = { login_name: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) =>
    {
        evt.preventDefault();
        facade.login(loginCredentials.login_name, loginCredentials.password, setLoggedIn, setErrorMessage)
    }
    const onChange = (evt) =>
    {
        setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }



    return (
        <div style={{textAlign:"center"}}>
          
            <h2>Login</h2>
            
            <form onChange={onChange} >
                <input placeholder="user Name" id="login_name" /><br/><br/>
                <input placeholder="Password" id="password" /><br/><br/>
                <button onClick={performLogin} >Login</button>
            </form>
            
        </div>
    )

}