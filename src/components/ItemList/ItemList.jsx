import Item from "../Item/Item"

const ItemList = ({productos}) => {

    return (
        <div className="row justify-content-center">
            {productos.map(producto => <Item producto={producto}/>)}
        </div>
    )
}

export default ItemList

