import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Scopes from "./Scopes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import NoMatch from "./NoMatch";
import Element1 from "./Element1";
import Allscopes from "./Allscopes";


function Revistion(props){
    return(
<Container>
<Router>
<Header name="revistion" />

<Switch>
<Route exact path="/">
    <Allscopes/>
</Route>
<Route path="/scopes">
    <Scopes/>
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
export default Revistion;