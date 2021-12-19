import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {Publish} from "@material-ui/icons"
import './Product.css'
import { useState, useEffect } from 'react';

 const Product = ({match}) => {
    const BASE_URL = process.env.REACT_APP_API_URL
    const {id} = match.params;
    const [product, setProduct] = useState({});
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState(null);
    // const [stock, setStock] = useState(null);
    // const [status, setStatus] = useState('');
    const [image, setImage] = useState('');
    const [updateProduct, setUpdateProduct] = useState({
        name: '',
        price: null,
        stock: null,
        status: '',
    });
     useEffect(() => {
        const data = fetch(`${BASE_URL}/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res);
                setUpdateProduct({
                    name: res.name,
                    price: res.price,
                    stock: res.stock,
                    status: res.status,

                })
            });
    }, [id]);




 const handleSubmit = async(e) => {
    e.preventDefault();
console.log(updateProduct);
    try{
        const res = await fetch(`${BASE_URL}/products/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        });
        
        const data = await res.json();
        
        if(image !== undefined){
            editImage();
        }
        
        window.location.reload();
        
        
    }
    catch(err){
        console.log(err);
    }
}   

const editImage = async () => {
    const formData = new FormData();
    formData.append('product-image', image);
    try{
        const res = await fetch(`${BASE_URL}/products/${id}/image`,{
            method: 'POST',
            body: formData
        });
        if(res.ok){
            const data = await res.json();
            console.log(data);
        }else{
            console.log('error');
        }
    }catch
    {
        console.log('error');
    }
}



const imageUpload = (e) => {
    if(e.target.files[0]=== 0){
        console.log('no file selected');
    }else{
        setImage(e.target.files[0]);
        
    }
    console.log(image);
}

    return(
        <div className="product">
        <div classNmae="product-title-container">
            <h1 className="product-title"></h1>
            <Link to="/newproduct">
                <button className="product-button">Create</button>
            </Link>
        </div>
        <div className="product-top">
            <div className="product-top-left">
                <Chart data={product}/>
                </div>
                <div className="product-top-right">
                    <div className="product-info-top">
                        <img className="product-image" src={product.image} alt=""/>
                        <span className="product-name">{product.name}</span>
                        </div>
                        <div className="product-info-bottom">
                            <div className="product-info-item">
                                <span className="product-info-key">id:</span>
                                <span className="product-info-value">1{product._id}</span>
                                </div>
                                <div className="product-info-item">
                                    <span className="product-info-key">stock:</span>
                                    <span className="product-info-value">{product.stock}</span>
                                  </div>
                                    <div className="product-info-item">
                                        <span className="product-info-key">status:</span>
                                        <span className="product-info-value">{product.status}</span>
                                        </div>
                                        <div className="product-info-item">
                                            <span className="product-info-key">price:</span>
                                            <span className="product-info-value">{product.price}</span>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="product-bottom">
                                                <from className="product-form" >
                                                    <div className="product-form-left">
                                                        <label className="product-form-label"> Name:</label>
                                                        <input className="product-form-input" 
                                                        type="text" value={updateProduct.name}
                                                         onChange= {(e) => setUpdateProduct({...updateProduct, name: e.target.value})}
                                                            placeholder=" enter product name"
                                                            />
                                                        <label className="product-form-label"> Stock:</label>
                                                        <input className="product-form-input" 
                                                        type="number" 
                                                        value={updateProduct.stock}
                                                        onChange= {(e) => setUpdateProduct({...updateProduct, stock: e.target.value})} 
                                                        placeholder=" enter Stoke"
                                                        />
                                                        <label className="product-form-label"> Status:</label>
                                                        <select aria-label="Books nad Snippets"
                                                        value={updateProduct.status}
                                                        onChange= {(e) => setUpdateProduct({...updateProduct, status: e.target.value})}>
                                                         <option >selection</option>
                                                         <option >available</option>
                                                         <option >unavailable</option>
                                                         </select>
                                                        {/* <input className="product-form-input" 
                                                        type="text" 
                                                        value={updateProduct.status}
                                                        onChange= {(e) => setUpdateProduct({...updateProduct, status: e.target.value})} 
                                                        placeholder=" enter status"/> */}
                                                        <label className="product-form-label"> Price:</label>
                                                        <input className="product-form-input" 
                                                        type="number" 
                                                        value={updateProduct.price}
                                                        onChange= {(e) => setUpdateProduct({...updateProduct, price: e.target.value})}
                                                         placeholder=" enter price"/>
                                                        {/* <label>In Stock </label>
                                                        <section name="inStock" id="idStock">
                                                            <option value="yes">Yes</option>
                                                            <option value="no">No</option>
                                                        </section>
                                                        <label>Active </label>
                                                        <section name="active" id="active">
                                                            <option value="yes">Yes</option>
                                                            <option value="no">No</option>
                                                        </section> */}

                                                        </div>
                                                        <div className="product-form-right">
                                                            <div className="product-upload">
                                                                <img className="product-upload-image" src={product.image} alt=""/>
                                                                <label for="file">
                                                                   
                                                                </label>
                                                                <input type="file" 
                                                                id="file" 
                                                                onChange={(e) => imageUpload(e)}
                                                                />
                                                                </div>
                                                                <button className="product-form-button" type="submit" onClick={handleSubmit}>update</button>
                                                             </div>
                                                                </from>
                                                                </div>
                                            </div>
                                            
                                          
    )
}


export default Product;