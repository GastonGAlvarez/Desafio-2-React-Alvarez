import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({ id }) => {

    const [ wasClick, setWasClick] = useState(false);

    const { addCarrito, cartList, products } = useContext(CartContext);

    const addOn = (quantity) =>{
        addCarrito({...products[index], quantity});
        setWasClick(true);
    };
    

    let index = products.findIndex(element => element.id === id);

    return (     
        <div className="col-4 m-3 border w-25 " data-id={products[index].id}>  
            <div className='card-header'>{products[index].name}</div>
            <div className='card-header'>{products[index].price}</div>
            <div className='card-header'>{products[index].stock}</div>
            <div className="card-body">
                <img src={`${products[index].urlImage}`} alt='Imagen del Producto' className='w-25' />
            </div>

            { 
                wasClick ? (    <Link to="/cart">
                                    <p>Ir a la tienda</p>
                                </Link> )
                        : (
                <ItemCount initial={1} stock={products[index].stock} addOn={addOn}/> )      
            }      

        </div>      
    )
}

export default ItemDetail
