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
import RoomsListScreen from './screens/RoomsListScreen.js/roomsListScreen';
import PackageManagement from './screens/PackageManagement/restManagement'
import RoomUpdateScreen from './screens/RoomUpdateScreen/roomUpdateScreen';
import ReqScreen from './screens/reqAProposalScreen/reqProInsert'
import AllSkincares from './screens/SkincaresScreen/skincaresScreen';
import CreateRoomScreen from './screens/CreateRoomScreen.js/createRoomScreen';
import SkincareUpdateScreen from './screens/SkincareUpdateScreen/SkincareUpdateScreen';
import PackageUpdateScreen from './screens/PackageUpdateScreen/PackageUpdateScreen';
import SkincareDetail from './screens/SkincareDetailScreen/skincareDetailScreen'
import CartScreen from './screens/CartScreen/cartScreen'
import ShippingScreen from './screens/ShippingScreen/shippingScreen'
import PaymentScreen from './screens/PaymentScreen/payementScreen'

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
        <Route path="/listAllrooms" component={RoomsListScreen} />
        <Route path="/packageManagement" component={PackageManagement} />
        <Route path="/update/:id" component={RoomUpdateScreen} />
        <Route path="/roomManagement" component={RoomManagementScreen} />
        <Route path="/listAllRooms" component={RoomsListScreen} />
        <Route path="/requestPropsal" component={ReqScreen} />
        <Route path="/skincares" component={AllSkincares} />
        <Route path="/admin/createRoom" component={CreateRoomScreen} />
        <Route path="/skincareUpdate/:id" component={SkincareUpdateScreen} />
        <Route path="/updatePackage/:id" component={PackageUpdateScreen}/>
        <Route path="/skincare/:id" component={SkincareDetail} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
      </div>
    </Router>
  );
}

export default App;