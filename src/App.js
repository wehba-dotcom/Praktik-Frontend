import './App.css';

import Home from './components/Home.jsx';
import Scopes from './components/Scopes';
import Find_Scope from './components/Find_Scope.jsx';
import Scope from './components/Scope.jsx';
import Allscopes from './components/Allscopes';
import Leasing from './components/Leasing';
import Revistion from './components/Revistion';
import Card1 from './components/Card1';
import NoMatch from './components/NoMatch';
import Leases from './components/Leases';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservations from './components/Reservations';
import facade from './facade';
import { Container, Alert } from 'react-bootstrap';
import Allleases from './components/Allleases';
import Find_Reservation from './components/Find_Reservation';
import Find_Leases from './components/Find_Leases';
import Headheader from './components/Headheader';
import About from './components/About';
import SignIn from "./components/SignIn"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import AllUsers from './components/AllUsers';
import ModifyUsers from './components/ModifyUsers';
import SignUp from './components/SignUp';
import Facade from "./facade";



function App() {


    const [loggedIn, setLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('  SignIn and you will have agood detials');
  
    const logout = () => {
     
      setLoggedIn(false);
      setErrorMessage('Logged out.')
    };
  
    return (
      <Container>
        <Router>
          <Headheader facade={facade} loggedIn={loggedIn} />
          <Switch>
            <Route  exact path="/">
              <Home/>
            </Route>
            <Route  path="/signin">
              <SignIn
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
              />
              </Route>
            <Route path="/find_scopes">
              
                <Find_Scope facade={facade} setErrorMessage={setErrorMessage}/>
            </Route>
            <Route path="/find_reservation">
              {
                <Find_Reservation facade={facade} setErrorMessage={setErrorMessage}/>}
            </Route>
            <Route path="/find_leases">
              {
                <Find_Leases facade={facade} setErrorMessage={setErrorMessage}/>}
            </Route>
            <Route path="/modifyusers">
              {
                <ModifyUsers facade={facade} setErrorMessage={setErrorMessage} />}
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
        <Alert className="mt-4" >Status: {errorMessage}</Alert>
      </Container>
    );
    }
export default App;
