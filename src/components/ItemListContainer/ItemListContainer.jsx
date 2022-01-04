import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../../services/getFirestore";
import { useCarritoContext } from "../../CartContext/CartContext";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{

    const [loading , setLoading] = useState(true);

    const { products, setProducts} = useCarritoContext();

    const { categoryID } = useParams()


    useEffect(() =>{  

        setLoading(true);
        
        const dbQuery = getFirestore();    // Conexión con Firestore

        // Promesa

        if (categoryID) {
            dbQuery.collection('products').where('category', '==', categoryID).get() // // Traigo toda la categoría
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))    

        } else {                
            dbQuery.collection('products').get() // Traigo toda la colección "Products"
            .then(data => setProducts(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
        }

    }, [categoryID])

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