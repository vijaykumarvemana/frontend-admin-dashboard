import Chart from '../../components/chart/Chart';
import LatestInfo from '../../components/latestInfo/LatestInfo';
import NewUserList from '../../components/newUserList/NewUserList';
import UsefullInfo from '../../components/someInfo/UsefulInfo';
import Profile from '../../components/profile/Profile';
import { userData } from '../../somedata.js';
import { useState } from 'react';
import './Home.css';
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
        <div className="hello">
           <h2 className="hello-text">Hello, ....
           </h2>
           <img className="hello-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{height:"100px", width:"100px" }}/>
             <p className="hello-text">
                  good morning,
               </p>
        
       
           
            </div>

        
        
         </div>
   )  
}

export default Home;

