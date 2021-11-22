import React from 'react';
import '../topbar/Topbar.css'
import Badge from '@material-ui/core/Badge';
import {NotificationsNone, Settings }from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Topbar = () => {
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
                      <IconButton>   
                     
                     <img src="https://images.pexels.com/photos/8111465/pexels-photo-8111465.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="topbar-profile-image" />   
                     </IconButton>
                     </div>
                </div>
            </div>
    )
}


export default Topbar;