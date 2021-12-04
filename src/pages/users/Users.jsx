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
    { field: 'email', headerName: 'Email', width: 90 },
    { field: 'phone', headerName: 'Phone', width: 90 },
//     {field: "avatar", headerName: "Image", width: 90, 
// renderCell: (params) => {
//     return <img src={params.data.avatar} alt="avatar" width="50" height="50" />
// }},

    { field: 'address', headerName: 'Address', width: 90 },
    { field: 'status', headerName: 'Status', width: 90 },
    { field: 'action', headerName: 'Action', width: 90,
     renderCell: (params) => {
            return <Link to={`/users/${((params.row) || {})._id}`}>Edit</Link>
    }
    }
];
console.log(columns);

     



    return (    
        <div className= "user-list">
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