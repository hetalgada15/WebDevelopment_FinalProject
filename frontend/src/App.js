//import logo from './logo.svg';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar/navbar';
import { Router } from 'express';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Route path="/" component={LandingScreen} exact />
        {/* <Route path="/homescreen" component={HomeScreen} /> */}
      
    </div>
    </Router>
  );
}

export default App;
``