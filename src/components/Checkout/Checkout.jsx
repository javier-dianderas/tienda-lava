import { Timestamp } from "firebase/firestore"
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { addOrder } from "../../services/ordersService"

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const [cart, total, clear] = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try {
            const order = {
                buyer: {
                    name, phone, email
                },
                items : cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const id = await addOrder(order)
            setOrderId(id)
            clear()
        } catch (err) {
            return <h1>Ocurrio un error: {err}</h1>
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder} />
        </div>
    )
}

export default Checkout