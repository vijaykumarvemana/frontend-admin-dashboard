import Chart from '../../components/chart/Chart';
import UsefullInfo from '../../components/someInfo/UsefulInfo';
import { userData } from '../../somedata.js';
const Home = () =>{
   return ( 
        <div className="home-page">
            <UsefullInfo />
            <Chart data={userData} title="User Analytics" grid datakey="Active User"/>
        </div>
   )  
}

export default Home;

