import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";
import Revistiones from "./Revistiones";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import NoMatch from "./NoMatch";
import Element1 from "./Element1";
import Allscopes from "./Allscopes";


function Revistion(){
    return(
<Container>
<Router>
<Header  />

<Switch>
<Route exact path="/">
    <Allscopes/>
</Route>
<Route path="/revistiones">
    <Revistiones/>
</Route>


<Route path="/element1">
    <Element1 />
</Route>
    <Route path="*">
        <NoMatch />
    </Route>


</Switch>


</Router>





</Container>
    )
}
function Header() {
    return (
      <div style={{marginTop:'40px'}}>
        <ul className="header">
          <li> <NavLink exact activeClassName="active" to="/allscopes">All Revistios </NavLink></li>
          <li><NavLink activeClassName="active" to="/revistiones">Revistions</NavLink></li>
          <li><NavLink activeClassName="active" to="/element1">Emement1</NavLink></li>
           
        </ul>
      </div>
    );
  }
export default Revistion;