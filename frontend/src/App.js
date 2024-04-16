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
import conferenceInsert from './screens/conferenceInsertScreen/conferenceInsert'
import PackageList from './screens/AllPackage/packageTable';
import ConferenceScreen from './screens/conferenceScreen/ConferenceScreen'
import PackageScreen from './screens/PackagesScreen/packagesScreen';

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
        <Route path="/conferenceInsert" component={conferenceInsert} />
        <Route path="/packageList" component={PackageList} />
        <Route path="/conference" component={ConferenceScreen} />
        <Route path="/packages" component={PackageScreen} />
      </div>
    </Router>
  );
}

export default App;