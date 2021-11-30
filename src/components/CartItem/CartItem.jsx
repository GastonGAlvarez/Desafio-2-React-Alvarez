import { useCarritoContext } from "../../CartContext/CartContext";

const CartItem = ({product}) =>{

    const { removeItemCart } = useCarritoContext();

    return(
        <div className="d-flex flex-column m-3 justify-items-center">
            <p>{product.nombre}</p>
            <p>{product.precio}</p>
            <p>{product.quantity}</p>
            <button type="button" onClick={ () => removeItemCart(product.id)}>X</button>
        </div>
    );
}

export default CartItem;