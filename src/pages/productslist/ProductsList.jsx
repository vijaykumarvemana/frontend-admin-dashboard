import '../productslist/ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addProducts, removeProduct } from '../../actions'

const ProductsList = () =>{

  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()
    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetchData();
    }, []);

    
        const fetchData = async () => {
        const result = await fetch('http://localhost:3001/products');
        const data = await result.json();
            setData(data);
            dispatch(addProducts(data))
            console.log(data);
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
      await fetch(`http://localhost:3001/products/${id}`, {
        method: "DELETE",
      });
      dispatch(removeProduct(id))
      
      fetchData();
    };


   
  
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
        />
      </div>
    );
  }
export default ProductsList;