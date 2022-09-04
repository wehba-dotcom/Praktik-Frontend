import React from 'react';
import myimage from "./bornholm1.jpg";
import {Link} from 'react-router-dom';

function Body( ) {
  
  return (
    <div>
    <div className="navbar bg-dark rounded text-white">
<h1>BORNHOLM KUMMONE DATABASES</h1>
</div>
    <div className="col-md-12 " >
    <div className='card'>
      <div className='card__body'>
      <img src={myimage} width={500} height={500}/>
        <h2 className='card__title'>All Scopes</h2>
        <p className='card__description'>data about th BRK-DHCP</p>
        </div>            
        </div>
            
        </div>   
</div>
  )
}
export default Body