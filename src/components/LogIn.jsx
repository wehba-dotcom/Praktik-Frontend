import React, { useState } from "react";
import {Modal} from 'react-bootstrap'


export default function logIn({  logout, loggedIn, setLoggedIn, facade, setErrorMessage}) {
    const init = { login_name: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
   
    const [isAdmin, setIsAdmin] = useState(0);

    function handleHttpErrors(res) {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
      }
      return res.json();
     }

    const performLogin = (evt) => {
      evt.preventDefault();
      console.log(loginCredentials.login_name, loginCredentials.password)
      facade.login(loginCredentials.login_name, loginCredentials.password)
      .then(handleHttpErrors)
            .then((data) =>{
               console.log(data)
               setLoggedIn(true);
               setErrorMessage('Logged in');

            })
            .catch(err =>
              {
                  if (err.status)
                  {
                      console.log(err)
                      err.fullError.then(e => console.log(e.code + ": " + e.message))
                  }
                  else { console.log("Network error"); }
              })
}

    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <div className="login-card" >
        <h2>Login</h2>
        <form onChange={onChange} >
          <input className="login-input" placeholder="User Name" id="login_name" /> <br />
          <input className="login-input" type="password" placeholder="Password" id="password" /> <br />
          <button className="login-btn" onClick={performLogin}>Login</button>
        </form>
        </div>

   ) }