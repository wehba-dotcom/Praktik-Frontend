import React, { useState } from "react";
import {Modal} from 'react-bootstrap'

import SignUp from "./SignUp";
export default function SignIn({ login, facade }) {
    const init = { login_name: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleOpen = () => {
        setShowModal(true)
    }


    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.login_name, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <div className="login-card" >
        <h2>Login</h2>
        <form onChange={onChange} >
          <input className="login-input" placeholder="User Name" id="username" /> <br />
          <input className="login-input" type="password" placeholder="Password" id="password" /> <br />
          <button className="login-btn" onClick={performLogin}>Login</button>
        </form>
        <button className="register-btn" onClick={handleOpen}> register</button>
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body><SignUp facade={facade}/></Modal.Body>
      </Modal>
      </div>
    )
    }