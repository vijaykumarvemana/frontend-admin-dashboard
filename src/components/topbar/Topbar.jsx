import React, { useEffect, useState } from 'react';
import '../topbar/Topbar.css'
import Badge from '@material-ui/core/Badge';
import {NotificationsNone}from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Profile from '../profile/Profile';


const Topbar = () => {
    const [user, setUser] = useState({})
    const [toggle , setToggle] = useState(false)
    useEffect(() => {
        const data = fetch('http://localhost:3001')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUser(res);
            });
    }, []);
    const handleProfile = () => {
        console.log(user);
        setToggle(!toggle)
       
     
    }

        
    return (
        <>
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <span className="logo">Pro-Admin</span>
                </div>
                <div className="topbar-right">
                    
                    <IconButton><Badge badgeContent={4} color="primary">
                    <NotificationsNone color="action" />
                    </Badge>
                    </IconButton>
                    
                     
                      <IconButton onClick={handleProfile}>   
                      
                     
                     <img src={((user[0]) || {}).image} style={{width:"30px", height:"30px",  border: "1px solid black", borderRadius: "50%", objectFit:"cover"}} alt="image"/>   
                     </IconButton>
                     </div>
                </div>
            </div>
            {
                toggle ? <Profile  user={user}/> : null
            }
            
            </>

    )
}


export default Topbar;