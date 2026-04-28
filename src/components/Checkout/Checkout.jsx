import { Timestamp } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { addOrder } from "../../services/ordersService"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import useAsyncState from "../../hooks/useAsyncState"
import AsyncResult from "../AsyncResult/AsyncResult"
import styles from "./Checkout.module.scss"
import { Link } from "react-router"

const Checkout = () => {
    
    const [orderId, setOrderId] = useState('')
    const {loading, setLoading, error, setError} = useAsyncState()

    const { cart, total, clear } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setOrderId("")
        setError("")
        setLoading(true)

        try {
            const order = {
                buyer: {
                    name, phone, email
                },
                items : cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const respuesta = await addOrder(order)
            if(!respuesta.status) {
                setError(`Ocurrio un error: ${respuesta.message}`)
                return
            }            

            setOrderId(respuesta.data)
            clear()
        } catch (err) {
            setError(`Ocurrio un error: ${err.message || err}`)
        } finally {
            setLoading(false)
        }
    }

    if(orderId) {
        return (
            <div className={styles.checkout}>
                <span className={styles.checkoutSpan}>El id de su orden es {orderId}</span>
                <Link className={styles.checkoutButton} to="/">Volver al catalogo</Link>
            </div>
            
        )
    }

    return (
        <AsyncResult loading={loading} messageLoading="Se esta generando su orden" error={error}>                            
            <CheckoutForm onConfirm={createOrder} />            
        </AsyncResult>
    )
}

export default Checkout