import { useEffect, useState } from "react"
import { getProductById } from "../../services/productsService"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router"
import useAsyncState from "../../hooks/useAsyncState"
import AsyncResult from "../AsyncResult/AsyncResult"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const {loading, setLoading, error, setError} = useAsyncState()

    const { itemId } = useParams()

    useEffect(() => {
        setError("")
        setLoading(true)

        getProductById(itemId)
            .then(response => {
                if(response.status) {
                    setProduct(response.data)
                }
            }).catch(err => {
                setError(`Ocurrio un error: ${err.message || err}`)
            }).finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <AsyncResult loading={loading} messageLoading="Cargando producto" error={error}>
            {product !== null && <ItemDetail product={product} />}
        </AsyncResult>
    )
}

export default ItemDetailContainer