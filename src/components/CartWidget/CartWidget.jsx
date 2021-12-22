import { Link } from "react-router-dom";
import { useCarritoContext } from "../../CartContext/CartContext";

const CartWidget = () =>{
    
    const { quantity } = useCarritoContext();    


    return(
        <Link to="/cart">
            <i className="bi bi-cart" style={{color:"white", fontSize:"25px", display: "inline-block"}}></i>
            { quantity !== 0 && (<label>{quantity}</label>) }
        </Link>
    );
};

export default CartWidget;