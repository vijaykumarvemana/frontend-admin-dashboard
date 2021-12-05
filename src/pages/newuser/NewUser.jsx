import './NewUser.css'
import { useState , useEffect} from 'react'

const NewUser = () => {
    const [user , setUser] = useState({
        name: '',
        email: '',
        phone: '',
        status: '',
        address: '',
        avatar: '',
    })
    const [avatar , setAvatar] = useState('')
    const postUser = async () => {
        try {
            const response = await fetch('http://localhost:3001/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if(response.ok) {
                alert('User created successfully')
            }else {
                alert('User creation failed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const fetchNewUserId = async () => {
        try {
            const response = await fetch('http://localhost:3001/customers')
            const data = await response.json()  
            console.log(data)
            const newUserId = data[data.length - 1]._id
            console.log(newUserId)
            return newUserId
        } catch (error) {
            console.log(error)
        }
    }


    const handleInput = (e, propertyName) => {
        setUser({
            ...user,
            [propertyName]: propertyName === " " ? "" : e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        await postUser()
        const newUserId =  await fetchNewUserId()
        postAvatar(newUserId)
    }
    const imageUpload = (e) => {
        if(e.target.files.length === 0) {
            console.log('No file selected')
        }   else {
            setAvatar(e.target.files[0])
        }
    }

    const postAvatar = async (newUserId) => {
        
            const formData = new FormData()
            formData.append('customer-image', avatar)
            try{
                const response = await fetch(`http://localhost:3001/customers/${newUserId}/avatar`, {
                    method: 'POST',
                    body: formData
                })
                if(response.ok) {
                    alert('Avatar uploaded successfully')
                } else {
                    alert('Avatar upload failed')
                }
            } catch (error) {
                console.log(error)

            }
    }

    return (
       <div className="new-user">
           < h1 className="new-user-title"> New User </h1>
           <form className="new-user-form" onSubmit= {handleSubmit}>
                <div className="new-user-item">
                    <label className="new-user-label">Name</label>
                    <input className="new-user-input" 
                    onChange= {(e) => handleInput(e, 'name')}
                    type="text" placeholder="Name"/>
                </div>
                <div className="new-user-item">
                    <label className="new-user-label">Email</label>
                    <input className="new-user-input" 
                    onChange= {(e) => handleInput(e, 'email')}
                    type="text" placeholder="Email"/>
                </div>
                <div className="new-user-item">
                    <label className="new-user-label">Phone</label>
                    <input className="new-user-input" 
                    onChange= {(e) => handleInput(e, 'phone')}
                    type="text" placeholder="Phone"/>
                </div>
                <div className="new-user-item">
                    <label className="new-user-label">Status</label>
                    <input className="new-user-input" 
                    onChange= {(e) => handleInput(e, 'status')}
                    type="text" placeholder="Status"/>
                </div>
                <div className="new-user-item">
                    <label className="new-user-label">Address</label>
                    <input className="new-user-input" 
                    onChange= {(e) => handleInput(e, 'address')}
                    type="text" placeholder="Address"/>
                </div>
                <div className="new-user-item">
                    <label className="new-user-label">Image</label>
                    <input className="new-user-input" 
                    onChange= {(e) => imageUpload(e)}
                    type="file" placeholder="Image"/>
                </div>
            
                <button className="new-user-button" >Create</button>
              </form>
         </div>
    )


    }

    export default NewUser;