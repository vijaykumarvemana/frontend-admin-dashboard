
import "./Transaction.css";
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns'
import { DeleteOutline } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, removeTransaction } from '../../actions';


const Transactions = () => {
    const BASE_URL = process.env.REACT_APP_API_URL
    const dispatch = useDispatch();
    const [ transactions, setTransactions ] = useState([]);

    useEffect(() => {
        fetchTranx();
        dispatch(addTransaction())
    }, []);

    const fetchTranx = async () => {
        try{
            const response = await fetch(`${BASE_URL}/transactions`);
            const data = await response.json();
            setTransactions(data);
        }   catch(error){
            console.log(error);
        }
       
    };
  
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
            <h6 onClick ={ () => deleteTrans(params.row._id)} className="delete-trans">Delete</h6>   
            </>    )
    }
    },   
    ]

    const deleteTrans = async (id) => {
        console.log("hello")
        const response = await fetch(`${BASE_URL}/transactions/${id}`, {
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
      {/* <Link to="/newtransaction">
            <button className="trans-button">Create</button>
        </Link> */}
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