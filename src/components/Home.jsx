
import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

import Body from './Body';

function Home( ) {
  
  return (
    <div>
    <Body/>
    <div className="row">
     
    <Card1 name="Scope"  />

    <Card2 name="revsations"/>
    <Card3 name="seles"/>
    </div>
    </div>
  );
}

export default Home;