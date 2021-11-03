import { useState } from "react";

const ItemCount = ({stock, initial}) =>{

    const [amount, setAmount] = useState(initial);

    const addItem = () =>{
        if(amount < stock){
            setAmount(amount+1);
        }
        else console.log("No hay stock suficiente");
    };
    const removeItem = () =>{
        if(amount > 1){
            setAmount(amount-1);
        }
        else console.log("El monto mínimo es 1");
    };

    const addOn = () =>{
        console.log("Usted compró " + amount + " productos.");
    };
    

    return(
        <>
            <div className="itemCountContainer d-flex p-2 justify-content-around w-50 m-auto">
                <button type="button" className="btn btn-danger" onClick={removeItem}>-</button>
                <label className="quantityLabel">{amount}</label>
                <button type="button" className="btn btn-primary" onClick={addItem}>+</button>
            </div>
            <button type="button" className="submitProduct btn btn-success mt-3" onClick={addOn}>Agregar al Carro</button>
        </>
    );
}

export default ItemCount