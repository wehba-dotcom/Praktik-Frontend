
import React from 'react';
import Card1 from './Card1';
import Card2 from './Revistion';
import Card3 from './Card3';
import {Link} from 'react-router-dom';
import Body from './Body';

function Home( props) {
  
  return (
    <div>
    <Body/>
    <div className="row">
     
    <Card1 name="Scope" see={<a href = "/scope">scope</a>} description="data about scopes"/>

    <Card1 name="revsations" see={<a href='/revistion'>revstion</a>} description="data about revistion"/>
    <Card1 name="leases" see={<a href='/leases'>Leases</a>} description="data about leases" />
    </div>
    </div>
  );
}

export default Home;