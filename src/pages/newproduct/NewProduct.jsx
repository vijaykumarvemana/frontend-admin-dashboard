import './NewProduct.css';
import { useState } from 'react';
const NewProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        stock: '',
        status: '',
        price: '',
        image: '',
    });
    const [imageFile, setImageFile] = useState()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);
        setProduct(...product, {...product.image})
    };
    const imageUpload = (e) =>{
        if(e.target.files.length === 0){
            console.log("no image file selected")
        }else{
            setImageFile(e.target.files[0])
            
        }
    }
    return (
        <div className= "new-product">
            <h1 className="new-product-title">New Product</h1>
            <form className="new-product-form" onSubmit={handleSubmit}>
                <div className="new-product-item">
                    <label className="new-product-label">Name</label>
                    <input className="new-product-input" 
                    value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}
                    type="text" placeholder="Name"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Stock</label>
                    <input className="new-product-input" 
                    value={product.stock}
                    onChange={(e) => setProduct({...product, stock: e.target.value})}
                    type="number" placeholder="Stock"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Status</label>
                    <input className="new-product-input" 
                    value={product.status}
                    onChange={(e) => setProduct({...product, status: e.target.value})}
                    type="text" placeholder="Status"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Price</label>
                    <input className="new-product-input" 
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: e.target.value})}
                    type="number" placeholder="Price"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Image</label>
                    <input type="file" 
                     onChange = {(e) => imageUpload(e)}
                    className="new-product-input"/>
                </div>
                <button className="new-product-button">Create</button>
            </form>
        </div>
    
    );
    }

export default NewProduct;    