import './NewProduct.css';
import { useState } from 'react';
const NewProduct = () => {
    const [product, setProduct] = useState({
        name: '',
        stock: null,
        status: '',
        price: null,
        image: '',
    });
    const [imageFile, setImageFile] = useState()

    const postData = async () => { 
        
        try {
            const response = await fetch('http://localhost:3001/products', {
                method: 'POST',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            });
            if (response.status === 200) {
                alert('Product has been added');
            }else{
                alert('Error');
            }

        } catch (error) {
            console.log(error);
            
        }
    }

    const fetchNewProductId = async () => {
        try {
            const response = await fetch('http://localhost:3001/products', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data);
            const newProductId = data[data.length - 1]._id;
            console.log(newProductId);
            return newProductId;

        } catch (error) {
            console.log(error);
        }

    }

    const handleInput = (e, propertyName) => {
        setProduct({
            ...product,
            [propertyName]: propertyName === " " ? "" : e.target.value
        });
    }
const handleSubmit = async (e) => {
    e.preventDefault();
    await postData();
    const newProductId = await fetchNewProductId();
    console.log(newProductId);
    postImage(newProductId);
    if(imageFile === undefined){
        alert('Please upload an image');
    }else{
        alert('Product has been added');
        
    }
}

    const imageUpload = (e) =>{
        if(e.target.files.length === 0){
            console.log("no image file selected")
        }else{
            setImageFile(e.target.files[0])
            
        }
    }

const postImage = async (id) => {
    const formData = new FormData();
    formData.append('product-image', imageFile);
    try {
        const response = await fetch(`http://localhost:3001/products/${id}/image`, {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            console.log('Image has been uploaded');
        } else {
            console.log('Error');
        }
    } catch (error) {
        console.log(error);
    }
}





    return (
        <div className= "new-product">
            <h1 className="new-product-title">New Product</h1>
            <form className="new-product-form" onSubmit={handleSubmit}>
                <div className="new-product-item">
                    <label className="new-product-label">Name</label>
                    <input className="new-product-input" 
                    
                    onChange={(e) => handleInput(e, 'name')}
                    type="text" placeholder="Name"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Stock</label>
                    <input className="new-product-input" 
                    
                    onChange={(e) => handleInput(e, 'stock')}
                    type="number" placeholder="Stock"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Status</label>
                    <input className="new-product-input" 
                    
                    onChange={(e) => handleInput(e, 'status')}
                    type="text" placeholder="Status"/>
                </div>
                <div className="new-product-item">
                    <label className="new-product-label">Price</label>
                    <input className="new-product-input" 
                   
                    onChange={(e) => handleInput(e, 'price')}
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