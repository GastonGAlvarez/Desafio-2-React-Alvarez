import { useCarritoContext } from "../../CartContext/CartContext";

const CartItem = ({product}) =>{

    const { removeItemCart } = useCarritoContext();

    return(
        <div className="d-flex flex-column m-3 align-items-center">
            <p>{product.name}</p>
            <img src={`${product.urlImage}`} alt={`${product.name}`} className="w-25" />
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <button type="button" onClick={ () => removeItemCart(product.id)}>X</button>
        </div>
    );
}

export default CartItem;