import React from 'react';



function Card1(props ) {
  
  return (
    <div className="col-md-4 col-sm-6 " >
    <div className='card'>
      <div className='card__body'>
   <h1>Her come description </h1>
        <h2 className='card__title'>{props.name}</h2>
        <p className='card__description'>{props.description}</p>
        </div>            
        </div>
            
           {props.see}
</div>
  )
}
export default Card1