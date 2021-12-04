import './User.css';

import  { PermIdentity, CalendarToday, MailOutline, LocationOn, PhoneAndroid, Publish, ImageOutlined } from "@material-ui/icons"
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';    

const User = ({match}) => {
    const id = match.params.id;
    console.log(id);
   const [user, setUser] = useState({});
   const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [avatar, setAvatar] = useState('');
    const [updateUser , setUpdateUser] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
        address: '',
    }   );

useEffect(() => {
    getUser();
}, [id]);


    const getUser = async () => {
        try {
           
            const response = await fetch(`http://localhost:3001/customers/${id}`);
            const data = await response.json();
            setUser(data);
            
            setUpdateUser({
                name: data.name,
                email: data.email,
                phone: data.phone,
                status: data.status,
                address: data.address,

            });

        } catch (error) {
            setError(error);
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(updateUser);
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/customers/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updateUser),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            
            if(avatar !== undefined){
             editImage();
            }
             window.location.reload();
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const editImage = async () => {
        const formData = new FormData();
        formData.append('customer-image', avatar);
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3001/customers/${id}/avatar`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
           
           
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const imageUpload = (e) => {
        if(e.target.files[0] === undefined) {
            console.log('No file selected');
        } else {
            setAvatar(e.target.files[0]);
        }
    }






    return (
        <div className="user">
            <div className="user-title-container">
                <h1 className="user-title">Edit User</h1>
                <Link to="/newuser" className="user-title-link">
                <button className="user-create-button">Create</button>
                </Link>
                </div>
                <div className="user-container">
                    <div className="user-show">
                        <div className="user-show-top">
                            <img  src={user.avatar} alt="avatar" className="user-show-avatar"/>
                            <div className="user-show-info">
                                <span className="user-show-name">{user.name}</span>
                                <span className="user-show-email">{user.email}</span>
                                </div>
                                </div>  

                                <div className="user-show-bottom">
                                      
                                        <div className="user-show-content">
                                                <PhoneAndroid className="user-show-icon"/>
                                                <span className="user-show-text">{user.phone}</span>
                                                </div>
                                                <div className="user-show-content">
                                                    <MailOutline className="user-show-icon"/>
                                                    <span className="user-show-text">{user.email}</span>
                                                    </div>
                                                    <div className="user-show-content">
                                          <CalendarToday className="user-show-icon"/>
                                            <span className="user-show-text">{user.createdAt}</span>
                                            </div>
                                                    <div className="user-show-content">
                                                        <LocationOn className="user-show-icon"/>
                                                        <span className="user-show-text">{user.address}</span>
                                                        </div>
                                                        </div>
                                                        </div>
                                                     <div className="user-Update">
                                                         <span className="user-Update-title">Edit</span>
                                                         <form className="user-Update-form">
                                                             <div className="user-Update-left">
                                                                 <div className= "user-Update-item">
                                                                     <label className="user-Update-label">Name:</label> 
                                                                        <input className="user-Update-input" 
                                                                        type="text" 
                                                                        value={updateUser.name}
                                                                        onChange={(e) => setUpdateUser({...updateUser, name: e.target.value})}
                                                                        placeholder="John Doe"/> 
                                                                        </div>
                                                                        <div className= "user-Update-item">
                                                                            <label className="user-Update-label">Email:</label>
                                                                            <input className="user-Update-input"
                                                                            value={updateUser.email}
                                                                            onChange={(e) => setUpdateUser({...updateUser, email: e.target.value})}
                                                                             type="text" placeholder="email" />
                                                                            </div>
                                                                            <div className= "user-Update-item">
                                                                                <label className="user-Update-label">Phone:</label>
                                                                                <input className="user-Update-input"
                                                                                value={updateUser.phone}
                                                                                onChange={(e) => setUpdateUser({...updateUser, phone: e.target.value})}
                                                                                 type="text" placeholder="phone" />
                                                                                </div>
                                                                                <div className= "user-Update-item">
                                                                                <label className="user-Update-label">Status:</label>
                                                                                <input className="user-Update-input"
                                                                                value={updateUser.status}
                                                                                onChange={(e) => setUpdateUser({...updateUser, status: e.target.value})}
                                                                                 type="text" placeholder="status" />
                                                                                </div>
                                                                                <div className= "user-Update-item">
                                                                                    <label className="user-Update-label">Address:</label>
                                                                                    <input className="user-Update-input" 
                                                                                    value={updateUser.address}
                                                                                    onChange={(e) => setUpdateUser({...updateUser, address: e.target.value})}
                                                                                    type="text" placeholder="address" />
                                                                                    </div>
                                                                                    </div>
                                                                                    <div className= "user-Update-right">
                                                                                        <div className= "user-Update-upload">
                                                                                            <img src={user.avatar} alt="avatar" className="user-Update-avatar"/>
                                                                                            <label className="user-Update-label"><Publish /></label>
                                                                                            <input className="user-Update-input"
                                                                                            onChange= {(e) => imageUpload(e)}
                                                                                             type="file" placeholder="" />
                                                                                            </div>
                                                                                            <button className="user-Update-button" onClick={handleSubmit}>Update</button>
                                                                                            </div>
                                                                                            </form>
                                                                                            </div>
                                                                                            </div>
                                                                                            </div>
                                                                                            )
};


export default User;