
import './App.css';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
  return (
   <Router>
    <Topbar />
    <div className="container">
    <Sidebar />
   <Switch>
     <Route exact path="/" component={Home} />
   </Switch>
    </div>
    </Router>
  );
}

export default App;
