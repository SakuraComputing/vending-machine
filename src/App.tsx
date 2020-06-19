import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } 
 from 'react-router-dom';
import './App.css';
import Cans from './components/Cans';
import About from './components/About';
import { cans } from './shared/cans'

function App() {
  return (
    <Router>
      <div className="vending-app">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to ="/about">About</Link>
            </li>
            <li>
              <Link to="/cans">Cans</Link>  
            </li>       
          </ul>
        </nav>
        <div className="app app-logo">
          <h1>Vending Machine</h1>
        </div>
      </div>

      <Switch>
        <Route path="/about">
          <About name={'The perfect vending machine'} />
        </Route>
        <Route path="/cans">
          <Cans canArray={cans}/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
