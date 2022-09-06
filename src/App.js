import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Scopes from './components/Scopes';
import Element1 from './components/Element1.jsx';
import Scope from './components/Scope.jsx';
import Allscopes from './components/Allscopes';
import Leasing from './components/Leasing';
import Revistion from './components/Revistion';
import Card1 from './components/Card1';
import NoMatch from './components/Leasing';
import Leases from './components/Leases';
import 'bootstrap/dist/css/bootstrap.min.css';
import Revistiones from './components/Revistiones';
import { BrowserRouter , Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

 
           <Route exact path="/" component={Home}/>
           <Route path="/revistiones"  component={Revistiones}/>
           <Route path="/allscopes"  component={Allscopes}/>
           <Route path="/header" component={Header}/>
          <Route path="/scopes" component={Scopes}/>
          <Route path="/element1" component={Element1}/>
          <Route path="/scope" component={Scope}/>
         <Route path="/leases" component={Leases}/>
          <Route path="/noMatch" component={NoMatch}/>
          <Route path="/card1" component={Card1}/>
          <Route path="/revistion" component={Revistion}/>
          <Route path="/leasing" component={Leasing}/>

  
 
 </BrowserRouter>
  )
}

export default App;
