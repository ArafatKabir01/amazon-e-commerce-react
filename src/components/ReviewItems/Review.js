
import './Review.css'





const Review = ({product,deleteCartItem}) => {
    
    return (
        <div className='review-items'>
            <div className='product-img'>
            <img src={product.img}></img>
            <div>
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Ratings: {product.ratings}</p>
            </div>
            </div>
            
           
            <button onClick={()=> deleteCartItem(product)}>Delete</button>
            
    
            
        </div>
    );
};

export default Review;