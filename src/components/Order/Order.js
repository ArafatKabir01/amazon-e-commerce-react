// import React, { createContext, useState } from 'react';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../ReviewItems/Review';
import './Order.css'


const Order = () => {
    const [products]  = useProduct();
    const [cart , setCart] = useCart(products);

    const deleteCartItem = product =>{
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (

       <div className='shop-section'>
            <div className='cart-items  '>
            <h2>Your Cart Items</h2>
                {
                cart.map(product => <Review key={product.id} product={product} deleteCartItem={deleteCartItem}></Review>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>

            </div>
            
        </div>

 
    );
};

export default Order;