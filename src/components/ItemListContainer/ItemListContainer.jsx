import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import { getFetch } from "../../services/getFetch";

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
                                                {`${prod.nombre} - ${prod.precio}`}
                                            </div>
                                            <div className="card-body">
                                                <img src={prod.foto} alt='' />
                                                {prod.precio}
                                                
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