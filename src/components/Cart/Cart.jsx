import { useCarritoContext } from "../../CartContext/CartContext";
import { memo } from "react";
import CartItem from "../CartItem/CartItem";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Cart = () =>{

    const { cartList, clearCarro} = useCarritoContext();
    const [ showModal, setShowModal] = useState(false);

    return (

        <div className="cartContainer">
            { cartList.map( product => <CartItem key={product.id} product={product}/>)}
            <button type="button" onClick={() => clearCarro()}>Vaciar Carrito</button>
            <Button onClick={()=> setShowModal(true)}>Realizar la compra</Button>
            <ModalWindow show={showModal} onHide={() => setShowModal(false)} />
        </div>

    )

}


export default Cart;