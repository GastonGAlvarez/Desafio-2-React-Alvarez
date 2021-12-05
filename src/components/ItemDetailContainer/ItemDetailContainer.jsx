import { useEffect, useState } from "react";
import { useParams, Link , Routes, Router} from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () =>{

    const [loading , setLoading] = useState(true);

    const { productID } = useParams();

    useEffect(() =>{
        
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
    })



    return(
        <> 
            <h3>Producto</h3>
            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    :
            <div className="card-columns d-flex justify-content-center">
                <ItemDetail id={productID}/>
            </div>  
            }
        </>

    );
};

export default ItemDetailContainer;