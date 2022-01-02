import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../../services/getFirestore";
import { useCarritoContext } from "../../CartContext/CartContext";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [loading , setLoading] = useState(true);

    const { products, setProducts} = useCarritoContext();

    useEffect(() =>{  

        const dbQuery = getFirestore();    // Conexión con Firestore

        // Promesa
        dbQuery.collection('products').get()   // Traigo toda la colección "Products"
        .then(resp => setProducts( resp.docs.map( prod => ( { id: prod.id, ...prod.data() } ) )  ))
        .catch( err => console.log(err))
        .finally(() => setLoading(false))

    })

    return(
        <>
            <h1 style={{backgroundColor: "grey", color: "white" }}>{greeting}</h1>

            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    :
                <div className="card-columns row">
                    <ItemList products={products}></ItemList>

                </div>
            }                         

        </>

    );
};

export default ItemListContainer;