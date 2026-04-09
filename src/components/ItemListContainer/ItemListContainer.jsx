import { useEffect, useState } from "react"
import { getProducts, getProductsByCategoryId } from "../../services/productsService"
import ItemList from "../ItemList/ItemList"
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
        <>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer