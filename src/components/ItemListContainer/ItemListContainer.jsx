import CardProduct from "../CardProduct/CardProduct"
import { productos } from "../../assets/data/datos"

const ItemListContainer = ({greetings}) => {
    return (
        <div>
            <h1>{greetings}</h1>

            {/* panel de filtros */}
            <div>
                {/* marcas */}
                <select id="filtroMarcas">
                </select>
                {/* rango de precios */}
                <input id="filtroPrecioMinimo" />
                <input id="filtroPrecioMaximo" />
            </div>
            {/* panel de resultados */}
            <div>
                {/* resumen de resultados */}
                <div>
                    <span>7 productos</span>
                    <select id="ordenamiento">
                        <option id="ordenamientoPrecioAlto">Precio mas alto</option>
                        <option id="ordenamientoPrecioBajo">Precio mas bajo</option>
                        <option id="ordenamientoNombreAscentente">Nombre (A-Z)</option>
                        <option id="ordenamientoNombreDescentente">Nombre (Z-A)</option>
                    </select>
                </div>
                {/* resultados */}
                <div>                    
                    <CardProduct marca={productos[0].marca} nombre={productos[0].nombre} precio={productos[0].precio} />
                    <CardProduct marca={productos[1].marca} nombre={productos[1].nombre} precio={productos[1].precio} />
                    <CardProduct marca={productos[2].marca} nombre={productos[2].nombre} precio={productos[2].precio} />
                    <CardProduct marca={productos[3].marca} nombre={productos[3].nombre} precio={productos[3].precio} />
                    <CardProduct marca={productos[4].marca} nombre={productos[4].nombre} precio={productos[4].precio} />
                    <CardProduct marca={productos[5].marca} nombre={productos[5].nombre} precio={productos[5].precio} />
                    <CardProduct marca={productos[6].marca} nombre={productos[6].nombre} precio={productos[6].precio} />
                </div>
            </div>

        </div>
    )
}

export default ItemListContainer