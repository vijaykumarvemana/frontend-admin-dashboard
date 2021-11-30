
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
           <Route exact path="/profile" component={Profile} />
           <Route path="/products" component={ProductsList} />
            <Route path="/product/:id" component={Product} />
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
