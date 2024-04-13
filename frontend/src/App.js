import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Nav1 from './components/Navbar/nav';
import Navbar from './components/Navbar/navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
      </div>
    </Router>
  );
}

export default App;