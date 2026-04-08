import { useEffect, useState } from "react"
import { getProductById } from "../../services/productsService"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(parseInt(itemId))
            .then(response => {
                if(response.status) {
                    setProduct(response.data)
                }
            }).catch(error => {
                console.log("Ocurrió un error", error)
            })
    }, [itemId])

    return (
        <div>
            {product !== null && <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer