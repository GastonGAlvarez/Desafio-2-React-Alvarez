import Item from "../Item/Item"

const ItemList = ({products}) => {

    return (
        <div className="row justify-content-center">
            {products.map(product => <Item product={product} key={product.id}/>)}
        </div>
    )
}

export default ItemList

