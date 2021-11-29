import { createContext, useContext, useState } from "react";


// Creo el context
export const CartContext = createContext([]);

// Creo una función para usar el contexto de forma mas practica
export const useCarritoContext = () => useContext(CartContext);



const CartContextProvider = ({children}) =>{
    
    const [cartList, setCartList] = useState([]);

    function addCarrito(item){
        
        if(cartList.find(element => element.id === item.id) === undefined){
            setCartList([...cartList, item]);
        }
        else{
            addQuantity(item);
        }
    }

    function addQuantity(item){
        let index = cartList.findIndex(element => element.id === item.id)
        if(index !== -1){
            cartList[index].quantity += item.quantity;
        }
    }

    function clearCarro(){
        setCartList([]);
    }

    function removeItemCart(id){
        let index = cartList.findIndex(element => element.id === id);
        if(index !== -1){
            cartList.splice(index, 1);
        }
    }

    return(
        <CartContext.Provider value={{ useCarritoContext, addCarrito, cartList, setCartList, clearCarro, removeItemCart}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider