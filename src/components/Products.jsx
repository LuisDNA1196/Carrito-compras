import './styles/Products.css'
import {AddToCartIcon, RemoveFromCartIcon} from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'


export function Products ({ products }) {
    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.ide === product.id)
    }

    return(
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => {
                 const isProductInCart = checkProductInCart(product)
                 return ( //slice del 0 al 10
                    <li key={product.id}>
                        <img 
                        src={product.thumbnail} 
                        alt={product.title} />
                        <div>
                          <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button 
                            style={{backgroundColor: isProductInCart ? 'red' : '#09f'}}
                            onClick={() => {
                                isProductInCart 
                                 ?removeFromCart(product)
                                 :addToCart(product)
                                }}
                                >
                                {
                                 isProductInCart
                                 ?<RemoveFromCartIcon/>
                                 :<AddToCartIcon/>
                                }
                            </button>
                        </div>
                    </li>
                 )
                })}
            </ul>
        </main>
    )
}