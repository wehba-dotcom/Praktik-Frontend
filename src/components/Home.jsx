
import React from 'react';
import Card1 from './Card1';
import Body from './Body';

function Home( props) {
  
  return (
    <div>
    <Body/>
    <div className="row">
     
    <Card1 name="Scope" see={<a  href = "/scope"><h2 style={{ color: 'grey' }}>scope</h2></a>} description="data about scopes"/>

    <Card1 name="revsations" see={<a href='/revistion'><h2 style={{ color: 'grey' }}>revistion</h2></a>} description="data about revistion"/>
    <Card1 name="leases" see={<a href='/leases'><h2 style={{ color: 'grey' }}>leases</h2></a>} description="data about leases" />
    </div>
    </div>
  );
}

export default Home;