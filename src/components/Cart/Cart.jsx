import { useCarritoContext } from "../../CartContext/CartContext";
import { memo } from "react";
import CartItem from "../CartItem/CartItem";

const Cart = () =>{

    const { cartList, clearCarro} = useCarritoContext();


    return (

        <div className="cartContainer">
            { cartList.map( product => <CartItem key={product.id} product={product}/>)}
            <button type="button" onClick={() => clearCarro()}>Vaciar Carrito</button>
        </div>

    )

}


export default Cart;