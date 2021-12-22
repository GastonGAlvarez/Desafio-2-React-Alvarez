import { createContext, useContext, useState } from "react";


// Creo el context
export const CartContext = createContext([]);

// Creo una función para usar el contexto de forma mas practica
export const useCarritoContext = () => useContext(CartContext);



const CartContextProvider = ({children}) =>{
    
    const [cartList, setCartList] = useState([]);
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(0);

    function addCarrito(item){
        
        if(cartList.find(element => element.id === item.id) === undefined){
            setCartList([...cartList, item]);
            setQuantity( quantity + item.quantity);
        }
        else{
            addQuantity(item);
        }
    }

    function addQuantity(item){
        let index = cartList.findIndex(element => element.id === item.id)
        if(index !== -1){
            cartList[index].quantity += item.quantity;
            setQuantity( quantity + item.quantity);
        }
    }

    function clearCarro(){
        setCartList([]);
        setQuantity(0);
    }

    function removeItemCart(id){
        let itemIndex = cartList.findIndex( element => element.id === id);
        setQuantity( quantity - cartList[itemIndex].quantity );

        setCartList(cartList.filter(element => element.id !== id));
    }


    return(
        <CartContext.Provider value={{ useCarritoContext, addCarrito, cartList, setCartList, clearCarro, removeItemCart, quantity, products, setProducts}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider