import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import RoomsScreen from './screens/roomsScreen.js/roomsScreen';
import StudioInsertScreen from './screens/StudioInsertScreen/studioInsertScreen';
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
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/studioInsert" component={StudioInsertScreen} />
      </div>
    </Router>
  );
}

export default App;