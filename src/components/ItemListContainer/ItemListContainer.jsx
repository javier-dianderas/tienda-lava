import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoryId } from "../../services/productsService"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router"
import useAsyncState from "../../hooks/useAsyncState"
import AsyncResult from "../AsyncResult/AsyncResult"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {loading, setLoading, error, setError} = useAsyncState()

    const { categoryId } = useParams()

    const asyncFunc = categoryId ? getProductsByCategoryId : getProducts;

    useEffect(() => {
        setError("")
        setLoading(true)

        asyncFunc(categoryId)
            .then(response => {
                if(response.status) {
                    setProducts(response.data)
                }
            }).catch(err => {
                setError(`Ocurrio un error: ${err.message || err}`)
            }).finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <AsyncResult loading={loading} messageLoading="Cargando productos" error={error}>
            <ItemList products={products} />
        </AsyncResult>
    )
}

export default ItemListContainer