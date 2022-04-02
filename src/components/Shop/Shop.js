import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import { addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useProduct();
    const [cart ,setCart]= useCart(products)
    const handleAddToCart = (selectedproduct) =>{
        let newProduct = [];
        const exist = cart.find(product => product.id === selectedproduct.id);
        if(!exist){
            selectedproduct.quantity = 1;
            newProduct = [...cart , selectedproduct]
        }
        else{
           const rest = cart.filter(produt => produt.id !==  selectedproduct.id)
           exist.quantity = exist.quantity + 1;
           newProduct = [...rest , exist]
        }
    
        setCart(newProduct)
        addToDb(selectedproduct.id)

    }
    return (
        <div className='shop-section'>
            <div className='producs-conteiner'>
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} product = {product}></Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;