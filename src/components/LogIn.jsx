import React, { useState } from "react";
import {Modal} from 'react-bootstrap'


export default function logIn({  setLoggedIn, facade, setErrorMessage, setIsAdmin , setUserRole}) {
    const init = { login_name: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
   
 


    const performLogin = (evt) => {
      evt.preventDefault();
      console.log(loginCredentials.login_name, loginCredentials.password)
      facade.login(loginCredentials.login_name, loginCredentials.password, setLoggedIn, setErrorMessage, setIsAdmin,setUserRole)
    
      
}

    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <div className="login-card" >
        <h2>Login</h2>
        <form onChange={onChange} >
          <input className="login-input" placeholder="User Name" id="login_name" /> <br /><br />
          <input className="login-input" type="password" placeholder="Password" id="password" /> <br /><br />
          <button className="login-btn" onClick={performLogin}>Login</button>
        </form>
        </div>

   ) }