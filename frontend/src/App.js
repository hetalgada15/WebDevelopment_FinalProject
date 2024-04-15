import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import RoomsScreen from './screens/roomsScreen.js/roomsScreen';
import StudioInsertScreen from './screens/StudioInsertScreen/studioInsertScreen';



const App=() => {
  return (
    <Router>
      <div>
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/studioInsert" component={StudioInsertScreen} />
      </div>
    </Router>
  );
}

export default App;
