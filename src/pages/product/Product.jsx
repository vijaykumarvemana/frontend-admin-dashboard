import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import {Publish} from "@material-ui/icons"
import './Product.css'
import { useState, useEffect } from 'react';

const Product = ({match}) => {
    const {id} = match.params;
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [status, setStatus] = useState('');
    const [image, setImage] = useState('');
     useEffect(() => {
        const data = fetch(`http://localhost:3001/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res);
               
            });
    }, []);
 console.log(product);

 const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const res = await fetch(`http://localhost:3001/products/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                price,
                stock,
                status
            })
        });
        const data = await res.json();
        console.log(data);
        if(image !== undefined){
            const formData = new FormData();
            formData.append('product-image', image);
            const res = await fetch(`http://localhost:3001/products/${id}/image`,{
                method: 'PUT',
                body: formData
            });
            const data = await res.json();
            console.log(data);
        }
    }
    catch(err){
        console.log(err);
    }
}   



// const imageUpload = (e) => {
//     if(e.target.files[0]== 0){
//         console.log('no file selected');
//     }else{
//         setImage(e.target.files[0]);
//     }

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
                <Chart />
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
                                                <from className="product-form" onSubmit={handleSubmit}>
                                                    <div className="product-form-left">
                                                        <label className="product-form-label"> Name:</label>
                                                        <input className="product-form-input" 
                                                        type="text" value={name}
                                                         onChange= {(e) => setName(e.target.value)}
                                                            placeholder=" enter product name"
                                                            />
                                                        <label className="product-form-label"> Stock:</label>
                                                        <input className="product-form-input" 
                                                        type="text" 
                                                        value={stock}
                                                        onChange= {(e) => setStock(e.target.value)} 
                                                        placeholder=" enter Stoke"
                                                        />
                                                        <label className="product-form-label"> Status:</label>
                                                        <input className="product-form-input" 
                                                        type="text" 
                                                        value={status}
                                                        onChange= {(e) => setStatus(e.target.value)} 
                                                        placeholder=" enter status"/>
                                                        <label className="product-form-label"> Price:</label>
                                                        <input className="product-form-input" 
                                                        type="text" 
                                                        value={price}
                                                        onChange= {(e) => setPrice(e.target.value)}
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
                                                                    <Publish />
                                                                </label>
                                                                <input type="file" 
                                                                id="file" 
                                                                onChange={(e) => setImage(e.target.files[0])}
                                                                style= {{display: "none"}}/>
                                                                </div>
                                                                <button className="product-form-button" type="submit">update</button>
                                                                </div>
                                                                </from>
                                                                </div>
                                            </div>
                                            
                                          
    )
}

export default Product;