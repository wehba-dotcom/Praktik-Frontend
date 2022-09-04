
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import { Card } from 'react-bootstrap';
import Body from './Body';
function Home( ) {
  
  return (
    <div>
    <Body/>
    <div className="row">
    <Card1 name="Scopes"  />

    <Card2 name="revsations"/>
    <Card3 name="seles"/>
    </div>
    </div>
  );
}

export default Home;