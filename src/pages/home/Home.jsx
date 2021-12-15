import Chart from '../../components/chart/Chart';
import LatestInfo from '../../components/latestInfo/LatestInfo';
import NewUserList from '../../components/newUserList/NewUserList';
import UsefullInfo from '../../components/someInfo/UsefulInfo';
import Profile from '../../components/profile/Profile';
import { userData } from '../../somedata.js';
import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns'
import './Home.css';
const Home = (props) =>{
  const [customData, setCustomData] = useState([]);


  useEffect(() => {
     fetchCustomData();
   }, []);

   const fetchCustomData = async () => {
       const response = await fetch('http://localhost:3001/customers/users-ActiveUsers');
         const data = await response.json();
         setCustomData(data);
         console.log(data);
   }


   const customerData = []
 const Data = useSelector(state => state.customer.customers);
 console.log(Data);
 Data.map(item => {
    const Day = format( 
      parseISO(item.createdAt) , "EEE")

      return customerData.push({
      Day,

      ...item
      })
   })
 
   
   // console.log(customerData);
   // customData.map(item => 
      
   //    console.log(new Date(item._id.day, item._id.month, item._id.year))
   // )
   const result = [];
    let ActiveUsers = 0;
    Data.forEach((record, index) => {
     
        if (index === 0) {
            result.push({
                name: format( 
                  parseISO(record.createdAt) , "EEE"),
                ActiveUsers: 1
            })
        } else {
         
            if (format( 
               parseISO(record.createdAt) , "EEE") === result[ActiveUsers].name) {
                result[ActiveUsers].ActiveUsers = result[ActiveUsers].ActiveUsers + 1
            } else {
              
                result.push({
                    name: format( 
                     parseISO(record.createdAt) , "EEE"),
                    ActiveUsers: 1
                })
                ActiveUsers = ActiveUsers + 1
            }
        }
    });
    
    console.log(result);
    const result2 = [{name: 'Mon', ActiveUsers: 0},{name: 'Wed', ActiveUsers: 0}, {name: 'Thu', ActiveUsers: 0},  {name: 'Sat', ActiveUsers: 0}, {name: 'Sun', ActiveUsers: 0}];

  const resultFinal = result.concat(result2)


  let activeUsers = {}
   resultFinal.forEach( function(item) {
          if(activeUsers[item.name]) { 
            activeUsers[item.name] = activeUsers[item.name] + item.ActiveUsers;
            } else {
               activeUsers[item.name] = item.ActiveUsers;
            }  
         });
         let activeUsersArray = [];
         for(let key in activeUsers) {
            activeUsersArray.push({
               name: key,
               ActiveUsers: activeUsers[key]
            })
         }
         console.log(activeUsersArray);

         const map = {
            "Mon": 1,   "Tue": 2,   "Wed": 3,   "Thu": 4,   "Fri": 5,   "Sat": 6,   "Sun": 7
         }

         activeUsersArray.sort((a, b) => {
            return map[a.name] - map[b.name];
            });
      
   
  
   return ( 

        <div className="d-flex">
        <div className="home-page">
        
            <UsefullInfo />
            
           
            <Chart data={activeUsersArray} title="User Analytics" grid datakey="ActiveUsers"/>
            
            <div className="home-new-latest" style={{"display":"flex", "marginLeft":"20px"}}>
                <NewUserList />
                <LatestInfo />
                
             </div>
           
        </div>
        <div className="hello">
           {/* <h2 className="hello-text">Hello, ....
           </h2>
           <img className="hello-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{height:"100px", width:"100px" }}/>
             <p className="hello-text">
                  good morning,
               </p> */}
        
       
           
            </div>

        
        
         </div>
   )  
}

export default Home;

