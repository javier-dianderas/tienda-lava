import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoryId } from "../../services/productsService"
import ItemList from "../ItemList/ItemList"
import styles from './ItemListContainer.module.scss'
import { useParams } from "react-router"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    const asyncFunc = categoryId ? getProductsByCategoryId : getProducts;

    useEffect(() => {
        asyncFunc(parseInt(categoryId))
            .then(response => {
                if(response.status) {
                    setProducts(response.data)
                }
            }).catch(error => {
                console.log("Ocurrió un error", error)
            })
    }, [categoryId])

    return (
        <div className={styles.resultsContent}>
            <ItemList products={products} />
        </div>
    )

    // return (
    //     <>
    //         <div className={styles.container}>
    //             {/* panel de filtros */}
    //             <div className={styles.filters}>
    //                 <div className={styles.filtersTitle}>
    //                     Filtros
    //                 </div>

    //                 {/* categorias */}
    //                 <div className={styles.filtersGroup}>
    //                     <div className="fw-bold">Categorías</div>
    //                     <div className="pt-2">
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkSmartphones" type="checkbox" value="Smartphones" />
    //                             <label className="form-check-label" for="checkSmartphones">Smartphones</label>
    //                         </div>
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkTablets" type="checkbox" value="Tablets" />
    //                             <label className="form-check-label" for="checkTablets">Tablets</label>
    //                         </div>
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkSmartwatches" type="checkbox" value="Smartwatches" />
    //                             <label className="form-check-label" for="checkSmartwatches">Smartwatches</label>
    //                         </div>
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkAccesorios" type="checkbox" value="Accesorios" />
    //                             <label className="form-check-label" for="checkAccesorios">Accesorios para móvil</label>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {/* marcas */}
    //                 <div className={styles.filtersGroup}>
    //                     <div className="fw-bold">Marcas</div>
    //                     <div className="pt-2">
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkXiaomi" type="checkbox" value="Xiaomi" />
    //                             <label className="form-check-label" for="checkXiaomi">Xiaomi</label>
    //                         </div>
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkSamsung" type="checkbox" value="Samsung" />
    //                             <label className="form-check-label" for="checkSamsung">Samsung</label>
    //                         </div>
    //                         <div className="form-check">
    //                             <input className="form-check-input" id="checkApple" type="checkbox" value="Apple" />
    //                             <label className="form-check-label" for="checkApple">Apple</label>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {/* rango de precios */}
    //                 <div className={styles.filtersGroup}>
    //                     <div className="fw-bold">Rango de precios</div>
    //                     <div className={`pt-2 ${styles.filtersGroupRange}`}>
    //                         <input className="form-control" id="filtroPrecioMinimo" /> - <input className="form-control" id="filtroPrecioMaximo" />
    //                     </div>
    //                 </div>
    //             </div>
    //             {/* panel de resultados */}
    //             <div className={styles.results}>
    //                 {/* resumen de resultados */}
    //                 <div className={styles.resultsBar}>
    //                     <span>7 productos</span>
    //                     <select id="ordenamiento" className="form-select" style={{width: 'auto'}}>
    //                         <option id="ordenamientoPrecioAlto">Precio mas alto</option>
    //                         <option id="ordenamientoPrecioBajo">Precio mas bajo</option>
    //                         <option id="ordenamientoNombreAscentente">Nombre (A-Z)</option>
    //                         <option id="ordenamientoNombreDescentente">Nombre (Z-A)</option>
    //                     </select>
    //                 </div>
    //                 {/* resultados */}
    //                 <div className={styles.resultsContent}>                    
    //                     <CardProduct marca={productos[0].marca} nombre={productos[0].nombre} precio={productos[0].precio} />
    //                     <CardProduct marca={productos[1].marca} nombre={productos[1].nombre} precio={productos[1].precio} />
    //                     <CardProduct marca={productos[2].marca} nombre={productos[2].nombre} precio={productos[2].precio} />
    //                     <CardProduct marca={productos[3].marca} nombre={productos[3].nombre} precio={productos[3].precio} />
    //                     <CardProduct marca={productos[4].marca} nombre={productos[4].nombre} precio={productos[4].precio} />
    //                     <CardProduct marca={productos[5].marca} nombre={productos[5].nombre} precio={productos[5].precio} />
    //                     <CardProduct marca={productos[6].marca} nombre={productos[6].nombre} precio={productos[6].precio} />
    //                 </div>
    //             </div>

    //         </div>
    //     </>
    // )
}

export default ItemListContainer