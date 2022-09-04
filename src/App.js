import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Scopes from './components/Scopes.jsx';
import NoMatch from './components/NoMatch.jsx';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
    <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/header" component={Header}/>
           <Route exact path="/scopes" component={Scopes}/>
   </Switch>
 </BrowserRouter>
  )
}

export default App;
