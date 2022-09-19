
import React from 'react';
import Card1 from './Card1';
import Body from './Body';
import { useHistory } from 'react-router-dom';

function Home( props) {
  const history = useHistory()
  return (
    <div>
    <Body/>
    <div className="row">
     
    <Card1 name="Scope" see={<button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/find_scope") } >Go TO Scopes!</button>} description="data about scopes"/>

    <Card1 name="Revistion" see={<a href='/find_reservation'><h2 style={{ color: 'grey' }}>Reservations</h2></a>} description="data about revistion"/>
    <Card1 name="leases" see={<a href='/find_leases'><h2 style={{ color: 'grey' }}>leases</h2></a>} description="data about leases" />
    </div>
    </div>
  );
}

export default Home;