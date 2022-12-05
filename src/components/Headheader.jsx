import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/form.css";

export default function Headheader({facade, loggedIn,logout, isAdmin,userRole}) {
  
  return (
    <div style={{marginTop:'40px'}}>
      <ul className="header">
        <li> <NavLink exact activeClassName="active" to="/"> Home </NavLink></li>
         { facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&&(
          <li><NavLink activeClassName="active" to="/find_scope">Scopes</NavLink></li>)
           }
         {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&&(
          <li><NavLink activeClassName="active" to="/find_reservation">Reservation</NavLink></li>)
        }
         {facade.hasUserAccess(isAdmin,loggedIn ,"user",userRole)&&(
          <li><NavLink activeClassName="active" to="/find_leases">Leases</NavLink></li>
        )}
        {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
          <li><NavLink activeClassName="active" to="/allusers"> All Users</NavLink></li>
        )}
         {facade.hasUserAccess(isAdmin,loggedIn ,"admin",userRole)&& (
          <li><NavLink activeClassName="active" to="/modifyusers"> Modify Users</NavLink></li>
        )}
        
         <li><NavLink  activeClassName="active" to="/signin">SignIn</NavLink></li>
       
      </ul>
    </div>
  );
}
