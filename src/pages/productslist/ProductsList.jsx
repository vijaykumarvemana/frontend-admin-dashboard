import '../productslist/ProductList.css'
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';

const ProductsList = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        
        fetchData();
    }, []);

    
        const fetchData = async () => {
        const result = await fetch('http://localhost:3001/products');
        const data = await result.json();
            setData(data);
            console.log(data);
        };
   

    
 const handleDelete = (_id) => {
  //  const newData = data.filter(item => item._id !== _id);
   const result = fetch(`http://localhost:3001/products/${_id}`, {
         method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })  .then(res => res.json())
        .then(res => {
            
            window.location.reload();
        }
        )   .catch(err => console.log(err));
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
   
  
    return (
      <div className="productList" style={{ height: "75vh", width: '70%' }}>
          <h4>Products List</h4>
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