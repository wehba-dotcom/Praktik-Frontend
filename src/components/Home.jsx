
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import { Card } from 'react-bootstrap';

function Home( ) {
  
  return (
    <div className="row">
    <Card1 name="Scopes"  />

    <Card2 name="revsations"/>
    <Card3 name="seles"/>
    </div>
  );
}

export default Home;