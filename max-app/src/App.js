import React from 'react';
import './App.css';
import {NavLink, Navbar, Nav, NavItem} from 'react-bootstrap';
import { Routes, Route, Link  } from 'react-router-dom';

import Projects from './components/Projects.js';
import Home from "./components/Home.js"

//import Main from './Main';

const App = () => (
  <div className='app'>
    <h1>React Router Demo</h1>
    <Navigation />
    <Main />
  </div>
);

export default App;

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/projects'>Projects</NavLink></li>
    </ul>
  </nav>
);




const Main = () => (
  <Routes>
    <Route exact path='/' component={Home}></Route>
    <Route exact path='/Projects' component={Projects}></Route>
  </Routes>
);

