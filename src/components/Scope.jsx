import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import {Container} from "react-bootstrap";
import Scopes from "./Scopes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import NoMatch from "./NoMatch";
import Element1 from "./Element1";



function Scope(){
    return(
<Container>

<Header />
<Switch>
<Route exact path="/">
    <Scopes/>
</Route>
<Route path="/element1">
    <Element1 />

    <Route path="*">
        <NoMatch />
    </Route>
</Route>

</Switch>








</Container>
    )
}
export default Scope;