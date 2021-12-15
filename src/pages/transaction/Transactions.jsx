
import "./Transaction.css";
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns'
import { DeleteOutline } from "@material-ui/icons";


const Transactions = () => {
    const [ transactions, setTransactions ] = useState([]);

    useEffect(() => {
        fetchTranx();
    }, []);

    const fetchTranx = async () => {
        try{
            const response = await fetch('http://localhost:3001/transactions');
            const data = await response.json();
            setTransactions(data);
        }   catch(error){
            console.log(error);
        }
       
    };
   const trans= {
        "_id": "61b356f4079ce7a77e0279bc",
        "customer": {
            "_id": "61b2c446b913878c44938df7",
            "name": "vijay kumar",
            "email": "vvijaykumar_15@yahoo.com",
            "phone": "3200258525",
            "address": "Via Gabrio Serbelloni",
            "avatar": "https://res.cloudinary.com/dashboard-admin/image/upload/v1638797110/customers-images/zsmrdlnszzqlabrcjdve.jpg",
            "status": "active",
            "createdAt": "2021-12-10T03:06:46.803Z",
            "updatedAt": "2021-12-10T03:06:46.803Z",
            "__v": 0
        },
        "product": {
            "_id": "619ffc74fe61ddcfd4f48f0c",
            "name": "iphone1",
            "image": "https://res.cloudinary.com/dashboard-admin/image/upload/v1638653632/products-images/wabc4thang2ugfoqknp8.png",
            "stock": 140,
            "status": "not available",
            "price": 1200,
            "__v": 0
        },
        "Amount": 1300,
        "Status": "Rejected",
        "revenue": 1300,
        "cost": 1000,
        "profit": 300,
        "Date": "2021-12-10T13:32:36.085Z",
        "id": "61b356f4079ce7a77e0279bc"
    }

    const columns = [
        { field: 'id', headerName: 'ID' , width :90 },
        { field: 'customer', headerName: 'Customer' , width :150 ,
         renderCell: (params) => {
            console.log(params.row.customer);
            return (
                <>
                <img src={params.row.customer.avatar} alt="avatar" className="avatar" className="trans-img"/>
                <h6>{params.row.customer.name}</h6>
                </>
            )
    
    },},

        { field: 'product', headerName: 'Product', width :130 ,
        renderCell: (params) => {
            console.log(params.row.product);
            return (
                <>
                <img src={params.row.product.image} alt="product" className="trans-img" />
                <h6>{params.row.product.name}</h6>
                
                </>
            )
            },
    
    },
        
        { field: 'Status', headerName: 'Status', width :120,
        renderCell: (params) => {
            return (
                <>
                      {
                   params.row.Status === 'Rejected' ?   <h6 style={{color:'red'}}>{params.row.Status}</h6> :
                     params.row.Status === 'Accepted' ?   <h6 style={{color:'green'}}>{params.row.Status}</h6> :
                        params.row.Status === 'Pending' ?   <h6 style={{color:'orange'}}>{params.row.Status}</h6> :
                        <h6 style={{color:'blue'}}>{params.row.Status}</h6>
                }
                </>
          
            )
    },  }   ,
        // { field: 'revenue', headerName: 'Revenue', width :135 },
        { field: 'Amount', headerName: 'Amount', width :150 },
        // { field: 'profit', headerName: 'Profit', width :120 },
        { field: 'Date', headerName: 'Date', width :120,
        
        renderCell: (params) => {
            return (
                <h6>{format(parseISO(params.row.Date), 'MM/dd/yyyy')}</h6>
            )
    },  },
    {field: 'action', headerName: 'Action', width :150,
    renderCell: (params) => {
        return (
            <>
            <Link to={`/transaction/${params.row._id}`}>
                <button className="trans-button">Edit</button>

            </Link>
            <DeleteOutline onClick ={ () => deleteTrans(params.row._id)} className="delete-trans"/>    
            </>    )
    }
    },   
    ]

    const deleteTrans = async (id) => {
        console.log("hello")
        const response = await fetch(`http://localhost:3001/transactions/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        fetchTranx();
            

    }

    const handleCellClick = (e) => {
        const id = e.row.id
        window.location.href = `/transaction/${id}`

        
    }


    return (
        <div className= "trans-list d-flex">
        <div className="d-flex my-3">
      <h4 className="trans-list-title">Transactions</h4>
      <Link to="/newtransaction">
            <button className="trans-button">Create</button>
        </Link>
    </div>
        <DataGrid 
           rows={transactions}
            columns={columns}
            disableSelectionOnRowClick
            pageSize={10}
            checkboxSelection
            onCellClick={handleCellClick}
            />
            </div>
    // <div className="    d-flex justify-content-center">
    //     <h4>hello</h4>
    // </div>
    );
    }


export default Transactions;    