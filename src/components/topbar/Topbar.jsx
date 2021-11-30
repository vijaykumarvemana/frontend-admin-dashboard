import React, { useEffect, useState } from 'react';
import '../topbar/Topbar.css'
import Badge from '@material-ui/core/Badge';
import {NotificationsNone, Settings }from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Profile from '../profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Topbar = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const data = fetch('http://localhost:3001/')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUser(res);
            });
    }, []);
    const handleProfile = () => {
        console.log(user);
       
     
    }

        
    return (
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
                    <IconButton><Settings /></IconButton>
                      <IconButton onClick={handleProfile}>   
                     
                     <img src={((user[1])||{}).image} alt="" className="topbar-profile-image" />   
                     </IconButton>
                     </div>
                </div>
            </div>
    )
}


export default Topbar;