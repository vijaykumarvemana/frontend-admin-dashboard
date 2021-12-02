import React, { useEffect, useState } from 'react';
import '../topbar/Topbar.css'
import Badge from '@material-ui/core/Badge';
import {NotificationsNone, Settings }from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import Profile from '../profile/Profile';
import Home from '../../pages/home/Home';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const Topbar = ({}) => {
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
                      
                     
                     <img src="https://previews.123rf.com/images/panyamail/panyamail1809/panyamail180900343/109879063-user-avatar-icon-sign-profile-symbol.jpg" alt="" className="topbar-profile-image" />   
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