import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import Homecontent from './components/Homecontent/Homecontent';
import Slider from './components/Slider/Slider';
import Homes from './components/Homes/Homes';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Headers from './components/Headers/Headers';
import Topbar from './components/Topbar/Topbar';
import AuthProvider from './context/AuthProvider';
import Appoinment from './components/Appoinment/Appoinment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Department from './components/Department/Department';
import OfferList from './components/OfferList/OfferList';
import Offers from './components/Offer/Offers';
import Inventory from './components/Inventory/Inventory';
import OrderReview from './components/OrderReview/OrderReview';
import AddService from './components/AddService/AddService';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';






function App() {

  return (
    <div className="App">

      <Router>
        <AuthProvider>
          <BrowserRouter>
            <Topbar></Topbar>
            <Headers></Headers>
            <Slider></Slider>
            <Switch>
              <Route exact path="/">
                <Homes></Homes>
              </Route>
              <Route path="/homes">
                <Homes></Homes>
              </Route>
              {/* <Route path="/shipping">
                <Shipping></Shipping>
              </Route> */}
              <PrivateRoute path="/addservice">
                <AddService></AddService>
              </PrivateRoute>
              <PrivateRoute path="/myorder">
                <Offers></Offers>
              </PrivateRoute>
              <PrivateRoute path="/ordermanage">
                <Inventory></Inventory>
              </PrivateRoute>
              <PrivateRoute path="/offers">
                <AddService></AddService>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              {/* <Route path="/register">
                <Register></Register>
              </Route> */}

              {/* <PrivateRoute path="/appoinment">
                <Appoinment></Appoinment>
              </PrivateRoute>
              <PrivateRoute path="/myorder">
                <Offers></Offers>
              </PrivateRoute> */}
              <Route path="/*">
                <Notfound></Notfound>
              </Route>
            </Switch>
            <SectionTwo></SectionTwo>
            <SectionOne></SectionOne>
          </BrowserRouter>
        </AuthProvider>



        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
