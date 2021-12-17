import './Users.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addCustomers } from '../../actions';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Users = () => {
    const BASE_URL = process.env.REACT_APP_API_URL
    const users = useSelector(state => state);
    console.log(users);
    const dispatch = useDispatch();

    const [data, setUsers] = useState([]);

    useEffect(() => {
        dispatch(addCustomers())
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        const response = await fetch(`${BASE_URL}/customers`);
        const data = await response.json();
        setUsers(data);
        
    }
   

 const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'User', width: 90 ,
        renderCell: (params) => {
            console.log(params);
            return(
            <div className="user-list">
                <img src={((params.row) ||{}).avatar} alt="img"  className="user-img"/>
               
            </div>)
        },
    },
    { field: 'email', headerName: 'Email', width: 200},
    { field: 'phone', headerName: 'Phone', width:200 },

    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 ,
        renderCell: (params) => {
            return (
                <div className="productListItem">
                  {params.row.status === "Active" ? (
                    <h6 ><span style={{ color: "green", fontSize:"bolder"}}><FiberManualRecordIcon className='active1'/></span>{params.row.status}</h6>
                  ) : (
                    <h6 ><span style={{ color: "red", fontSize:"bolder"}}><FiberManualRecordIcon className='active1'/></span>{params.row.status}</h6>
                  )}
                </div>)
        },
        },
    { field: 'action', headerName: 'Action', width: 150,
     renderCell: (params) => {
 
            return (     <>
            <Link to={"/user/" + params.row._id}>
                <button className="user-button">Edit</button>
                </Link>
            <DeleteOutline onClick={() => deleteUser(params.row._id)} className="delete-user"/>
            </>)
        
   }
    }
];


const deleteUser = async (id) => {
    alert('Are you sure you want to delete this user?');
    const response = await fetch(`${BASE_URL}/customers/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    window.location.reload();
    fetchUsers();
}
const handleClick = (e) => {
    const id = e.row.id
    window.location.href = `/user/${id}`
}


     



    return (    
        <div className= "user-list d-flex">
            <div className="d-flex my-3">
          <h4 className="user-list-title">users</h4>
          <Link to="/newuser">
                <button className="user-button">Create</button>
            </Link>
        </div>
            <DataGrid 
               rows={data}
                columns={columns}
                disableSelectionOnRowClick
                pageSize={10}
                checkboxSelection
                onCellClick = {handleClick}
                />
                </div>
    );
}

export default Users;