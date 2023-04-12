import React from 'react';
import "./ShoppingCart.css"

const ShoppingCart = (props) => {
    return (
        <div>
            <h3>Order Summaryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</h3>
            <p>Total selected items:{props.cart.length}</p>
        </div>
    );
};

export default ShoppingCart;