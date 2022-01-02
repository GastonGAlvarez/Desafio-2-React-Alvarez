import { Link } from "react-router-dom"

const Item = ({product}) => {

    return (     
        <div key={product.id} className="card w-25 m-5 col-4 border" >
            <div className="card-header">
                {`${product.name}`}
            </div>
            <div className="card-body">
                <img src={product.urlImage} alt={`${product.name}`} className="w-100"/>
                {`$ ${product.price}`}
                
            </div>
            <div className="card-footer">
                    <Link to={`/detail/${product.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>
                    </Link>

            </div>

        </div>  
    )
}

export default Item
