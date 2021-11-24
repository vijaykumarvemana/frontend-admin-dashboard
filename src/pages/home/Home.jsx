import Chart from '../../components/chart/Chart';
import NewUserList from '../../components/newUserList/NewUserList';
import UsefullInfo from '../../components/someInfo/UsefulInfo';
import { userData } from '../../somedata.js';
const Home = () =>{
   return ( 
        <div className="home-page">
            <UsefullInfo />
            <Chart data={userData} title="User Analytics" grid datakey="Active User"/>
            <div className="home-new-list">
                <NewUserList />
        </div>
        </div>
   )  
}

export default Home;

