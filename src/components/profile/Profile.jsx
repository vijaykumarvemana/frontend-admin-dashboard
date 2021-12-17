import '../profile/Profile.css';
import { useEffect, useState } from 'react';
const Profile = ({user}) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    console.log(user[0].name);
    const id = user[0]._id.toString();
    console.log(id);
    const [admin , setAdmin] = useState({});
    const [image, setImage] = useState('');

    const [updateProfile , setUpdateProfile] = useState({
        name: "",
        surname: "",
        email: "",
        password: "", 
    });

    useEffect(() => {
      getAdmin();
    }, [id]);


    const getAdmin = async () => {
      try{
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        setAdmin(data);
        setUpdateProfile({
            name: data[0].name,
            surname: data[0].surname,
            email: data[0].email,
            password: data[0].password,
        });
      } catch(err){
        console.log(err);
      }
    }

     const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(updateProfile),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            if( image !== ''){
            editImage();
            }
            window.location.reload();
        } catch(err){
            console.log(err);
        }
    }

     const editImage = async () => {
       const formData = new FormData();
        formData.append('user-picture', image);
        try{
            const response = await fetch(`${BASE_URL}/${id}/picture`, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log(data);
        } catch(err){
            console.log(err);
        }   
    }


    
     const imageUpload = (e) => {
      if(e.target.files[0] === undefined) {
          console.log('No file selected');
      } else {
          setImage(e.target.files[0]);
      }
  }
 


    return (
        <div class="card">
         <form className="profile"  onSubmit= {handleSubmit}>
           <div className="profile-container">
            <img className="profile-pic" src={user[0].image} alt="profile-pic"  />
            <label className="lable-image">image  </label> 
            <input className="profile-image=upload"type="file" onChange= {(e) => imageUpload(e)} />
            </div>
                <div className="new-user-item1">
                    <label className="new-user-label">Name</label>
                    <input className="new-user-input" 
                     value={updateProfile.name}
                      onChange={(e) => setUpdateProfile({...updateProfile, name: e.target.value})}
                    type="text" placeholder="Name"/>
                </div>
               
                <div className="new-user-item3">
                <label className="new-user-label">Surname</label>
                <input className="new-user-input" 
                  value={updateProfile.surname}
                  onChange={(e) => setUpdateProfile({...updateProfile, surname: e.target.value})}
                type="text" placeholder="Surname"/>
            </div>
            <div className="new-user-item2">
                    <label className="new-user-label">Email</label>
                    <input className="new-user-input" 
                      value={updateProfile.email}
                      onChange={(e) => setUpdateProfile({...updateProfile, email: e.target.value})}
                    type="email" placeholder="Email"/>
                </div>
            <div className="new-user-item2">
                <label className="new-user-label">Password</label>
                <input className="new-user-input"
                disabled
                  value={updateProfile.password}
                  onChange={(e) => setUpdateProfile({...updateProfile, password: e.target.value})}
                type="password" placeholder="Passwword"/>
            </div>
                <button className="bnt">Save</button>
                </form>
      </div>
    );
}

export default Profile;
