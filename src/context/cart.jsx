import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";
//crear context
export const CartContext = createContext()

//initial state puede ser string, array, num, objeto
//reduccion de cocina no de hacerlo mas pequeño
//transforma el estado en base a una accion y calcula un estado

// const initialState = []
// const reducer = (state, action) =>{ //recibe estado y una accion
//     const {type:actionType, payload:actionPayload} = action
//     switch (actionType) { //lo mas comun es usar switch
//      case 'ADD_TO_CART':{
//         const { id } = actionPayload
//         const productInCartIndex = state.findIndex(item => item.id === id)

//         if(productInCartIndex >= 0){
//             //1.Structuredclone
//             const newState = structuredClone(state) //structuredClone crea una copia profunda
//             newState[productInCartIndex].quantity += 1
//             return newState
//         }
//         return[
//             ...state,
//             {
//                 ...actionPayload,
//                 quantity:1
//             }
//         ]
//      }   
//      case 'REMOVE_FROM_CART':{
//         const { id } = actionPayload
//         return state.filter(item => item.id !== id)
//      }
//      case 'CLEAR_CART':{
//         return initialState
//      }
//     } 
//     return state
// }

export function CartProvider ({ children }){
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    //dispatch se encarga de enviar las acciones a reducer

    // const [cart, setCart] = useState([])

    // const addToCart = product => {
    //     //Check if the product is already in the cart
    //     const productInCartIndex = cart.findIndex(item => item.id === product.id)

    //     if(productInCartIndex >= 0){
    //         //1.Structuredclone
    //         const newCart = structuredClone(cart) //structuredClone crea una copia profunda
    //         newCart[productInCartIndex].quantity += 1
    //         return setCart(newCart)
    //     }
    //     //Producto no en carrito
    //     setCart(prevState=>([
    //         ...prevState,
    //         {
    //             ...product,
    //             quantity: 1
    //         }
    //     ]))
    // }

    // const removeFromCart = product => {
    //     setCart (prevState => prevState.filter(item => item.id !== product.id))
    // }

    // const clearCart = () => {
    //     setCart([])
    // }
    
    const addToCart = product => dispatch ({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload:product
    })

    const clearCart = () => dispatch({type: 'CLEAR_CART'})

    return(
        <CartContext.Provider value={{
            cart:state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}