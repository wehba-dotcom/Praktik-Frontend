import React from 'react';
import myimage from "./image2.jpg";
import Headheader from './Headheader';


function Body( ) {
  const myStyle = {
   
  
   
  };
  return (
    <div>
    <div className=" text-center text-light rounded bg-secondary ">
    <h1>Bornholm Regional Municipality IT-DEPARMENT</h1>
    </div>
    <div className="col-md-12 " >
    <div className='card'>
      <div className='card__body'>
      <img src={myimage}  width="100%" height="99%"/>
      
      </div>        
        </div>
            
        </div>   
</div>
  )
}
export default Body