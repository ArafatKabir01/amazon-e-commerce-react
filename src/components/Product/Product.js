import React from 'react';
import './Product.css'

const Product = ({product ,handleAddToCart}) => {
    const {img , name , price} = product
    return (
        <div className='card'>
            <img src={img}></img>
            <div className='card-details'>
                <h6>{name}</h6>
                <p> ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)}  className='card-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;