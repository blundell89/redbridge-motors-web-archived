import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from '../pages/Home';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Header = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default Header;