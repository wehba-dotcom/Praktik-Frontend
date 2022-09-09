import './App.css';

import Home from './components/Home.jsx';
import Scopes from './components/Scopes';
import Element1 from './components/Element1.jsx';
import Scope from './components/Scope.jsx';
import Allscopes from './components/Allscopes';
import Leasing from './components/Leasing';
import Revistion from './components/Revistion';
import Card1 from './components/Card1';
import NoMatch from './components/NoMatch';
import Leases from './components/Leases';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reservations from './components/Reservations';
import { BrowserRouter , Route } from 'react-router-dom';

import React from 'react'

function App() {
  return (
    <BrowserRouter>

 
           <Route exact path="/" component={Home}/>
           <Route path="/reservations"  component={Reservations}/>
           <Route  path="/allscopes"  component={Allscopes}/>
         
          <Route path="/scopes" component={Scopes}/>
          <Route path="/element1" component={Element1}/>
          <Route path="/scope" component={Scope}/>
         <Route path="/leases" component={Leases}/>
          <Route path="/noMatch" component={NoMatch}/>
          <Route path="/card1" component={Card1}/>
          <Route path="/revistion" component={Revistion}/>
          <Route path="/leasing" component={Leasing}/>

  
 
 </BrowserRouter>
  )
}

export default App;
