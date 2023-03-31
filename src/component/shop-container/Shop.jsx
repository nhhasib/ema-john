import React, { useEffect, useState } from 'react';
import ShoppingCart from '../cart-side/ShoppingCart';
import Product from '../product/Product';
import "./Shop.css"

const Shop = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    
    const [cart,setCart]=useState([]);
    const addToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product=><Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
            </div>
            <div>
            <ShoppingCart cart={cart}></ShoppingCart>
            </div>

        </div>
    );
};

export default Shop;