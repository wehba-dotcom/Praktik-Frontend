
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
     
    <Card1 name="Scope" description="DHCP scopes in the network of BRK" see={<button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/scope") } >Go TO Scopes !</button>} />

    <Card1 name="Revistion" see={<button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/find_reservation") } >Go TO Reservations !</button>} description="Reservations related to all DHCP scopes"/>
    <Card1 name="leases" see={<button style={{
        backgroundColor: 'grey'
        
      }} onClick={()=> history.push("/find_leases") } >Go TO leases !</button>} description="Active and inactive leases related to all DHCP scopes" />
    </div>
    </div>
  );
}

export default Home;