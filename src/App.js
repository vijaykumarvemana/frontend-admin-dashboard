
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import ProductsList from './pages/productslist/ProductsList';
import Product from './pages/product/Product';
import Login from './pages/login/Login';
import Profile from './components/profile/Profile';
import Users from './pages/users/Users';
import User from './pages/user/User';
import NewUser from './pages/newuser/NewUser';
import NewProduct from './pages/newproduct/NewProduct';
function App() {
  const user = localStorage.getItem('token');
  return (
    <>
     {
        user ? (
          <Router>
     
          <Topbar />
          <div className="container1">
         
          <Sidebar />
          
         <Switch>
      
           <Route exact path="/" component={Home} />
           {/* <Route exact path="/profile" component={Profile} /> */}
           <Route path="/users" component={Users} />
           <Route path="/user/:id" component={User} />
           <Route path="/newuser" component={NewUser} />
           <Route path="/products" component={ProductsList} />
            <Route path="/product/:id" component={Product} />
            <Route path="/newproduct" component={NewProduct} />
         </Switch>
        
          </div>
          </Router>
          ) : (
            <Login />
           
     )
      }
   
    
    </>

    
  );
}

export default App;
