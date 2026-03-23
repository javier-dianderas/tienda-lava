import { useEffect, useState } from "react"
import { getProductById } from "../../services/productsService"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById()
            .then(response => {
                if(response.status) {
                    setProduct(response.data)
                }
            }).catch(error => {
                console.log("Ocurrió un error", error)
            })
    }, [])

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer