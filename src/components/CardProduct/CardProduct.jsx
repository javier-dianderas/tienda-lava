const CardProduct = ({marca, nombre, precio}) => {
    return (
        <div>
            <img></img>
            <div>
                <span>{marca}</span>
                <span>{nombre}</span>
                <span>{precio}</span>
            </div>
            <div>
                <button>Agregar</button>
            </div>
        </div>
    )
}

export default CardProduct