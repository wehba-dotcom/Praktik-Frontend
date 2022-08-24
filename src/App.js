import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Scopes from './components/Scopes.jsx';
import NoMatch from './components/NoMatch.jsx';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          <Route  exact path="/">
            <Home/>
          </Route>
          <Route path="/scopes">
         
              <Scopes  />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
