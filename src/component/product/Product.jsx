import React from 'react';
import "./Product.css"

const Product = (props) => {
    const {img,price,name,ratings,seller}=props.product;
    const addToCart=props.addToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>Product Name:{name}</h4>
            <p>Price:${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} star</p>  
            </div>
            <button className='btn-cart' onClick={()=>addToCart(props.product)}>Add to cart</button>
        </div>
    );
};
export default Product;