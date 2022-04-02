import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart , setCart] = useState([])
    useEffect(()=>{
        const storedCart =  getStoredCart()
        let savedCart = [];
        for(const id in storedCart ){
            const findItems = products.find(produt => produt.id === id);
            if(findItems){
                const quantity = storedCart[id]
                findItems.quantity = quantity;
                savedCart.push(findItems);
            }
        }
        setCart(savedCart);
     },[products]);
    return [cart , setCart]
};

export default useCart;