import React from 'react'
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar/navbar';
import LoginScreen from './screens/LoginScreen/loginScreen';
import SignupScreen from './screens/SignupScreen/signupScreen';
import RoomsScreen from './screens/roomsScreen/roomsScreen';
import LandingScreen from './screens/LandingScreen/landingScreen';
import ViewRoomScreen from './screens/ViewRoomScreen/viewRoomScreen';
import UserProfile from './screens/UserProfileScreen/userProfileScreen'
import studioInsertScreen from './screens/StudioInsertScreen/studioInsertScreen'
import CreateRest from './screens/PackageAdd/packageAdd'
import Packages from './screens/PackagesScreen/packagesScreen'
import BookingScreen from './screens/BookingScreen/bookingScreen';
import ViewPackagee from './screens/PackageDetailPage/restDetails'
import StudioScreen from './screens/studioHallScreen/StudioHallScreen';
import conferenceInsert from './screens/conferenceInsertScreen/conferenceInsert'
import PackageList from './screens/AllPackage/packageTable';
import ConferenceScreen from './screens/conferenceScreen/ConferenceScreen'
import StudioByIdScreen from './screens/studioByIdScreen/StudioByIdScreen'
import CreateRoomScreen from './screens/CreateRoomScreen/createRoomScreen';
import RoomManagementScreen from './screens/RoomManagementScreen/roomManagementScreen';
import RoomsListScreen from './screens/RoomsListScreen/roomsListScreen';
import PackageManagement from './screens/PackageManagement/restManagement'
import RoomUpdateScreen from './screens/RoomUpdateScreen/roomUpdateScreen';
import ReqScreen from './screens/reqAProposalScreen/reqProInsert'
import AllSkincares from './screens/SkincaresScreen/skincaresScreen';
import SkincareManagement from './screens/SkincareManagementScreen/skincareManagementScreen';
import ConferenceByIdScreen from './screens/conferenceByIdScreen/conferenceById'
import SkincareDetail from './screens/SkincareDetailScreen/skincareDetailScreen'
import CartScreen from './screens/CartScreen/cartScreen'
import ShippingScreen from './screens/ShippingScreen/shippingScreen'
import PaymentScreen from './screens/PaymentScreen/payementScreen'
import PlaceOrder from './screens/PlaceOrderScreen/placeOrderScreen'
import Nav1 from './components/Navbar/nav';
import OrderScreen from './screens/OrderScreen/orderScreen'
import OrderList from './screens/OrderListScreen/orderListScreen'
import ReservationScreen from './screens/ReservationScreen/reservationScreen'
import StudioListScreen from './screens/studioListScreen/studioListScreen'
import StudEventMgtScreen from './screens/studioEventMgtScreen/studioEventMgtScreen'
import GlamBookings from './screens/TableBookingListScreen/tableBookinglistScreen'
import ConferenceListScreen from './screens/conferenceListScreen/conferenceListScreen'
import PackageUpdateScreen from './screens/PackageUpdateScreen/PackageUpdateScreen';
import ReservationReport from './screens/PackageTableBookingReport/ReservationReport';
import BookinReportScreen from './screens/bookingReportScreen/bookinReportScreen';
import SkincareUpdateScreen from './screens/SkincareUpdateScreen/SkincareUpdateScreen';
import ConferenceUpdateScreen from './screens/ConferenceUpdateScreen/ConferenceUpdateScreen'
import StudioUpdateScreen from './screens/StudioUpdateScreen/StudioUpdateScreen'
import Footer from './components/Footer/footer'




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav1 />
        <Route path="/" component={LandingScreen} exact />
        {/* <Route path="/homescreen" component={HomeScreen} /> */}
        <Route path="/rooms" component={RoomsScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/signup" component={SignupScreen} />
        <Route path="/room/:id" component={ViewRoomScreen} />
        <Route path="/roombook/:roomid/:fromdate/:todate" component={BookingScreen} />
        <Route path="/packages" component={Packages} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/studioInsert" component={studioInsertScreen} />
        <Route path='/search/:keyword' component={RoomsScreen} />
        <Route path="/studios" component={StudioScreen} />
        <Route path="/conferenceInsert" component={conferenceInsert} />
        <Route path="/package/:id" component={ViewPackagee} />
        <Route path="/conference" component={ConferenceScreen} />
        <Route path="/createPackage" component={CreateRest} />
        <Route path="/admin/createRoom" component={CreateRoomScreen} />
        <Route path="/packageList" component={PackageList} />
        <Route path="/studio/:id" component={StudioByIdScreen} />
        <Route path="/packageManagement" component={PackageManagement} />
        <Route path="/update/:id" component={RoomUpdateScreen} />
        <Route path="/roomManagement" component={RoomManagementScreen} />
        <Route path="/listAllRooms" component={RoomsListScreen} />
        <Route path="/requestPropsal" component={ReqScreen} />
        <Route path="/skincares" component={AllSkincares} />
        <Route path="/skincareManagement" component={SkincareManagement} />
        <Route path="/con/:id" component={ConferenceByIdScreen} />
        <Route path="/skincare/:id" component={SkincareDetail} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrder} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/orderList' component={OrderList} />
        <Route path='/bookNow/:id' component={ReservationScreen} />
        <Route path='/glambookings' component={GlamBookings} />
        <Route path='/studList' component={StudioListScreen} />
        <Route path='/studEveMgt' component={StudEventMgtScreen} />
        <Route path='/conList' component={ConferenceListScreen} />
        <Route path="/updatePackage/:id" component={PackageUpdateScreen} />
        <Route path='/tableReservations' component={ReservationReport} />
        <Route path="/bookingreport" component={BookinReportScreen} />
        <Route path="/skincareUpdate/:id" component={SkincareUpdateScreen} />
        <Route path="/conUpdate/:id" component={ConferenceUpdateScreen} />
        <Route path="/studUpdate/:id" component={StudioUpdateScreen} />
       
      </div>
      <Footer />
    </Router>
  );
}

export default App;