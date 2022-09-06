import React from 'react';
import myimage from "./bornholm1.jpg";
import {Link} from 'react-router-dom';

function Card1(props ) {
  
  return (
    <div className="col-md-4 col-sm-6 " >
    <div className='card'>
      <div className='card__body'>
      <img src={myimage}/>
        <h2 className='card__title'>{props.name}</h2>
        <p className='card__description'>{props.description}</p>
        </div>            
        </div>
            
           {props.see}
</div>
  )
}
export default Card1