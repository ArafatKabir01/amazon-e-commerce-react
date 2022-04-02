import React from 'react';

const Cart = ({cart}) => {
    
     let total = 0;
     let shipping =0;
     let selectedItems = 0;
    for(const product of cart){
        // console.log(product)
        selectedItems = selectedItems +  product.quantity;
        total = total + product.price * product.quantity;
    } 
    return (
        <div>
            <h2>Selected Items : {selectedItems}</h2>
            <p>Total ${total}</p>
        </div>
    );
};

export default Cart;