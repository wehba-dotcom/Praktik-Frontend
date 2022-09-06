import React from "react";
import {Link} from 'react-router-dom';

function Allscopes(){

    return(
        <div>
        <Link to="/scope">Scope</Link> 
       
       <div> <h1>i am all scopes</h1></div>
       <Link to="/">Home</Link> 
       </div>
    )
}


export default Allscopes;