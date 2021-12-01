import Chart from '../../components/chart/Chart';
import LatestInfo from '../../components/latestInfo/LatestInfo';
import NewUserList from '../../components/newUserList/NewUserList';
import UsefullInfo from '../../components/someInfo/UsefulInfo';
import Profile from '../../components/profile/Profile';
import { userData } from '../../somedata.js';
import { useState } from 'react';
const Home = (props) =>{
   console.log(props);
   return ( 

        <div className="d-flex">
        <div className="home-page">
        
            <UsefullInfo />
            
           
            <Chart data={userData} title="User Analytics" grid datakey="Active User"/>
            
            <div className="home-new-latest" style={{"display":"flex", "marginLeft":"20px"}}>
                <NewUserList />
                <LatestInfo />
                
             </div>
           
        </div>
        
            <Profile /> 
        
        
         </div>
   )  
}

export default Home;

