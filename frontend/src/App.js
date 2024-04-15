import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Nav1 from './components/Navbar/nav';
import Navbar from './components/Navbar/navbar';
import LandingScreen from './screens/LandingScreen/landingScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Route path="/" component={LandingScreen} exact />
        <Route path="/room/:id" component={ViewRoomScreen} />
        <Route path="/profile" component={UserProfile} />

      </div>
    </Router>
  );
}

export default App;