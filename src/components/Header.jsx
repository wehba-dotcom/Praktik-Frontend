import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <div style={{marginTop:'40px'}}>
      <ul className="header">
        <li> <NavLink exact activeClassName="active" to="/allscopes">{props.name} </NavLink></li>
        <li><NavLink activeClassName="active" to="/scopes">Scopes</NavLink></li>
        <li><NavLink activeClassName="active" to="/element1">Emement1</NavLink></li>
         
      </ul>
    </div>
  );
}

export default Header;
