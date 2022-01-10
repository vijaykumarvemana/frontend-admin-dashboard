import './NewUserList.css'
import { Visibility } from "@material-ui/icons"
import { useEffect, useState } from 'react'

const NewUserList = () => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const [toggle , setToggle] = useState(false)
    const [users , setUsers] = useState([])
    const handleClick = () => {
       
        setToggle(!toggle)
                    
    }
 


 
 useEffect( async() => {
    try{
        const response = await fetch(`${BASE_URL}/customers`,
        {
            method: 'GET',
           
        })
        
                    
    if(response.ok){
        const data = await response.json()
        console.log(data)
        setUsers(data) 
    }else{
        console.log('error')
    }
        }catch(error){
            console.log(error)
        }
},[]);

console.log(users)

const userList = [...users].reverse()
console.log(userList)
  

  return(
    <div className="new-user-list">
        <sapn className="new-user-list-title">New Join Users</sapn>
       
        {
                userList.splice(0, 4).map(user => <ul className="new-user-list-ul">
            
                    <li className="new-user-list-li">
                    <img src={user.avatar} alt="" className="user-image"/>
                    <div className="user-info">
                        <span className="user-name">{user.name}</span>
                        <span className="user-title">{user.email}</span>
                    </div>
                    <button className="user-button" onClick={handleClick}>
                        <Visibility className="user-button-icon"/>
                        Display 
                    </button>
                  
                </li>
                {
         
                
                
                        // toggle && <div className="user-description">
                        //     < div>
                        //         {user.address}
                        //     </div>
                        // </div>
    
                    }
        
            
            
            
            {/* // <li className="new-user-list-li">
            //     <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
            //     <div className="user-info">
            //         <span className="user-name">vijay kumar</span>
            //         <span className="user-title">developer</span>
            //     </div>
            //     <button className="user-button">
            //         <Visibility className="user-button-icon"/>
            //         Display 
            //     </button>
            // </li>
            // <li className="new-user-list-li">
            //     <img src="https://avatars1.githubusercontent.com/u/12098981?s=460&v=4" alt="" className="user-image"/>
            //     <div className="user-info">
            //         <span className="user-name">vijay kumar</span>
            //         <span className="user-title">developer</span>
            //     </div>
            //     <button className="user-button">
            //         <Visibility className="user-button-icon"/>
            //         Display 
            //     </button>
            // </li> */}
           
            </ul> 
            )
        }
    </div>



  )
}
export default NewUserList;