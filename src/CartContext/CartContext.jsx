import { createContext, useContext, useState, useEffect } from "react";


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
        setCartList(cartList.filter(element => element.id !== id));
        setQuantity(0);
    }

    useEffect(() =>{
        console.log("TEST")
        for(let item of cartList){
            setQuantity( quantity + item.quantity );
            console.log(quantity)
        }
    }, [cartList])

    return(
        <CartContext.Provider value={{ useCarritoContext, addCarrito, cartList, setCartList, clearCarro, removeItemCart, quantity, products, setProducts}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider