import './Users.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Users = () => {

    const [data, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);


    const fetchUsers = async () => {
        const response = await fetch('http://localhost:3001/customers');
        const data = await response.json();
        setUsers(data);
        console.log(data);
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
    { field: 'status', headerName: 'Status', width: 120 },
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
console.log(columns);

const deleteUser = async (id) => {
    alert('Are you sure you want to delete this user?');
    const response = await fetch(`http://localhost:3001/customers/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    fetchUsers();
}


     



    return (    
        <div className= "user-list d-flex">
            <div className="d-flex my-3">
          <h4 className="user-list-title">products</h4>
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
                />
                </div>
    );
}

export default Users;