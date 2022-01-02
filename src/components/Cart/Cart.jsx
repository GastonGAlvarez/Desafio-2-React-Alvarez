import { useCarritoContext } from "../../CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import ModalWindow from "../ModalWindow/ModalWindow";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () =>{

    const { cartList, clearCarro} = useCarritoContext();
    const [ showModal, setShowModal] = useState(false);

    return (

        cartList.length > 0 ? (
            <div className="cartContainer">
                { cartList.map( product => <CartItem key={product.id} product={product}/>)}
                <button type="button" onClick={() => clearCarro()}>Vaciar Carrito</button>
                <Button onClick={()=> setShowModal(true)}>Realizar la compra</Button>
                <ModalWindow show={showModal} onHide={() => setShowModal(false)} />
            </div>
        )
        :
        (<>
            <p>¡El carro esta vacío!</p>
            <Link to="/products">
             <Button>Volver a productos</Button>
            </Link>

        </>)
    

    )

}


export default Cart;