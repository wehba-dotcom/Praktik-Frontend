import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Scopes from './components/Scopes';
import Element1 from './components/Element1.jsx';
import Scope from './components/Scope.jsx';
import Allscopes from './components/Allscopes';
import Card3 from './components/Card3';
import Revistion from './components/Revistion';
import Card1 from './components/Card1';
import NoMatch from './components/NoMatch';
import Leases from './components/Leases';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

 
           <Route exact path="/" component={Home}/>
           <Route path="/allscopes"  component={Allscopes}/>
           <Route path="/header" component={Header}/>
          <Route path="/scopes" component={Scopes}/>
          <Route path="/element1" component={Element1}/>
          <Route path="/scope" component={Scope}/>
         <Route path="/leases" component={Leases}/>
          <Route path="/noMatch" component={NoMatch}/>
          <Route path="/card1" component={Card1}/>
          <Route path="/revistion" component={Revistion}/>
          <Route path="/card3" component={Card3}/>
  
 
 </BrowserRouter>
  )
}

export default App;
