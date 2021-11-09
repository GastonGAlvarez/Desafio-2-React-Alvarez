
const Item = ({producto}) => {

    return (     
        <div className="itemDiv" data-id={producto.id}>  
            <div className='card-header'>{producto.nombre}</div>
            <div className='card-header'>{producto.precio}</div>
            <div className='card-header'>{producto.stock}</div>
            <div className="card-body">
                <img src={`./resources/${producto.nombre}.jpg`} alt='Imagen del Producto' className='w-25' />
            </div>               
        </div>      
    )
}

export default Item
