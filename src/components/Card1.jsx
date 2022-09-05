import React from 'react';
import myimage from "./bornholm1.jpg";
import {Link} from 'react-router-dom';

function Card1( ) {
  
  return (
    <div className="col-md-4 col-sm-6 " >
    <div className='card'>
      <div className='card__body'>
      <img src={myimage}/>
        <h2 className='card__title'>All Scopes</h2>
        <p className='card__description'>data about th BRK-DHCP</p>
        </div>            
        </div>
            
            <Link to="/scope"> view</Link>
</div>
  )
}
export default Card1