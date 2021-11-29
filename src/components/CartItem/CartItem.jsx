

const CartItem = ({product}) =>{


    return(
        <>
            <p>{product.nombre}</p>
            <p>{product.precio}</p>
            <p>{product.quantity}</p>
        </>
    );
}

export default CartItem;