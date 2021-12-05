import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import { getFirestore } from "../../services/getFirestore";
import { useCarritoContext } from "../../CartContext/CartContext";

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
            <h1 style={{backgroundColor: "grey", color: "white"}}>{greeting}</h1>

            { loading ? <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    :
                <div className="card-columns row">
                    { products.map(prod=> <div key={prod.id} className="card w-25 m-5 col-4 border" >
                                            <div className="card-header">
                                                {`${prod.name}`}
                                            </div>
                                            <div className="card-body">
                                                <img src={prod.urlImage} alt='' className="w-100"/>
                                                {`$ ${prod.price}`}
                                                
                                            </div>
                                            <div className="card-footer">
                                                    <Link to={`/detail/${prod.id}`}>
                                                        <button className="btn btn-outline-primary btn-block">
                                                            detalle del producto
                                                        </button>
                                                    </Link>

                                            </div>

                                        </div>
                                        )}

                </div>
                                    
                                    
            }

        </>

    );
};

export default ItemListContainer;