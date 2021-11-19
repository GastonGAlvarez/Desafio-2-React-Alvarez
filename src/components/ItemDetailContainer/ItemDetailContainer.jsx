import { useEffect, useState } from "react";
import { useParams, Link , Routes, Router} from 'react-router-dom';
import { getFetch, getFetchProduct} from "../../services/getFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{

    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);

    const { productID } = useParams();

    useEffect(() =>{
        
        getFetch
        .then(res => {
            setProducts(res) // array con los productos
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        
    },[])



    return(
        <>
            <h3>Producto</h3>

            { loading ? 
                            <span className="visually-hidden">Loading...</span>
                    :
            <div className="card-columns d-flex justify-content-center">
                <ItemDetail producto={products} id={productID}/>
            </div>  
            }
        </>

    );
};

export default ItemDetailContainer;