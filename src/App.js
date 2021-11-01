import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import TourDetails from './components/Tours/TourDetails/TourDetails';
import AddPackage from './components/Events/AddPackage/AddPackage';
import Cart from './components/Cart/Cart';
import ManageServices from './components/Events/ManageServices/ManageServices';
import UpdatePackage from './components/Events/UpdatePackage/UpdatePackage';
import NotFound from './components/NotFound/NotFound';
import ManageAllOrders from './components/Events/ManageAllOrders/ManageAllOrders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import About from './components/About/About';



;


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/addService">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <Route exact path="/packages/:id">
              <TourDetails></TourDetails>
            </Route>

            <PrivateRoute exact path="/cart">
            <Cart></Cart>
            </PrivateRoute>

            <PrivateRoute exact path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>

            <PrivateRoute exact path="/allorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/packages/update/:id">
            <UpdatePackage></UpdatePackage>
            </PrivateRoute>

        


            <Route path="*">
              <NotFound></NotFound>
            </Route>

         
         

          </Switch>
          <Footer></Footer>
        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
