import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext/CartContext";

const ItemDetail = ({producto, id}) => {

    const [ wasClick, setWasClick] = useState(false);

    const { addCarrito, cartList } = useContext(CartContext);

    const addOn = (quantity) =>{
        console.log("Usted compró " + quantity + " productos.");
        addCarrito({...producto[index], quantity});
        setWasClick(true);
    };
    
    console.log(cartList);

    let index = producto.findIndex(element => element.id === id);

    return (     
        <div className="col-4 m-3 border w-25 " data-id={producto[index].id}>  
            <div className='card-header'>{producto[index].nombre}</div>
            <div className='card-header'>{producto[index].precio}</div>
            <div className='card-header'>{producto[index].stock}</div>
            <div className="card-body">
                <img src={`./resources/${producto[index].nombre}.jpg`} alt='Imagen del Producto' className='w-25' />
            </div>

            { 
                wasClick ? (    <Link to="/cart">
                                    <p>Ir a la tienda</p>
                                </Link> )
                        : (
                <ItemCount initial={1} stock={5} addOn={addOn}/> )      
            }      

        </div>      
    )
}

export default ItemDetail
