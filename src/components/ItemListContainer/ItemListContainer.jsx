import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import getFetch from "../../services/getFetch";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [products, setProducts] = useState([]);
    const [loading , setLoading] = useState(true);

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
            <h1 style={{backgroundColor: "grey", color: "white"}}>{greeting}</h1>

            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner> : <ItemList productos={products}/>
                                    
                                    
            }

        </>

    );
};

export default ItemListContainer;