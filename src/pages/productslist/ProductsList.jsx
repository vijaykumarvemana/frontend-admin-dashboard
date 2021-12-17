import '../productslist/ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addProducts, removeProduct } from '../../actions'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const ProductsList = () =>{
  const BASE_URL = process.env.REACT_APP_API_URL
  console.log(BASE_URL)

  
 const products = useSelector(state => state)
 console.log(products)
  const dispatch = useDispatch()
  const [data, setData] = useState([]);


    useEffect(() => {
        dispatch(addProducts())
        fetchData();
    }, []);

    
        const fetchData = async () => {
        const result = await fetch(`${BASE_URL}/products`);
        const data = await result.json();
        
            setData(data);
           
           
            
           
        };
        
        
    
 

  
    const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      {
        field: "product",
        headerName: "Product",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.image} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "stock", headerName: "Stock", width: 200 },
      {
        field: "status",
        headerName: "Status",
        width: 120,
        renderCell: (params) => {
          return (
            <div className="productListItem">
              {params.row.status === "Available" ? (
                <h6 ><span style={{ color: "green", fontSize:"bolder"}}><FiberManualRecordIcon className='available'/></span>{params.row.status}</h6>
              ) : (
                <h6 ><span style={{ color: "red", fontSize:"bolder"}}><FiberManualRecordIcon className='available'/></span>{params.row.status}</h6>
              )}
            </div>
          );
        }
      },
      {
        field: "price",
        headerName: "Price",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link to={"/product/" + params.row._id}>
                <button className="productListEdit">Edit</button>
              </Link>
              <DeleteOutline
                className="productListDelete"
                onClick={() => handleDelete(params.row._id)}
              />
            </>
          );
        },
      },
    ];
    

    const handleDelete = async (id) => {
      alert("Are you sure you want to delete this product?");
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });
     
      window.location.reload();
      fetchData();
    };
 const handleClick = (e) => {
   const id = e.row.id
   window.location.href = `/product/${id}`
  }


   
  
    return (
      <div className="productList" style={{ height: "75vh", width: '70%' }}>
        <div className="d-flex my-3">
          <h4 className="product-list-title">products</h4>
          <Link to="/newproduct">
                <button className="product-button-1">Create</button>
            </Link>
        </div>
        <DataGrid 
          rows={data}
          disableSelectionOnClick
          columns={columns}
         className="productListGrid"
          rowsPerPageOptions={[8]}
          checkboxSelection
          onCellClick = {handleClick}
        />
      </div>
    );
  }
export default ProductsList;