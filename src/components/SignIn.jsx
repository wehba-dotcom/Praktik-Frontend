import React, { useState } from "react";
import {Modal} from 'react-bootstrap'
import SignUp from "./SignUp";
import LogIn from "./LogIn";




export default function SignIn({  logout, loggedIn, setLoggedIn, facade, setErrorMessage, setIsAdmin,setUserRole}) {
   
  
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false)
    const handleOpen = () => {
        setShowModal(true)
    }

   
    return (
      <div style={{textAlign:"center"}}>
      {!loggedIn ? (
        <LogIn  facade={facade} setLoggedIn={setLoggedIn} setErrorMessage={setErrorMessage} setIsAdmin={setIsAdmin} setUserRole={setUserRole}/>
      ) : (
        <div>
          <p><button onClick={logout}>Logout</button></p>
       
        </div>
      )}
    
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