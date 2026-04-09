import styles from "./Cart.module.scss"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router"

const Cart = () => {

    const { cart, total, clear, cartQuantity } = useContext(CartContext)

    return (
        // cartQuantity() === 0 ? (
        //     <div>
        //         <h1>No hay items en el carrito</h1>
        //         <Link to="/">Productos</Link>
        //     </div>
        // ) : (
            // <div>
            //     { cart.map(prod => <CartItem key={prod.id} />)  }
            //     <h3>Total: {total}</h3>
            //     <button onClick={clear}>Limpiar carrito</button>
            //     <Link to="/checkout">Pagar</Link>
            // </div>

            <div className={styles.cart}>
                <div className={styles.cartProducts}>
                    <div className={styles.cartProductsTitle}>
                        <h3>Tu carrito</h3>
                        <button className={styles.cartProductsTitleButton} onClick={() => clear()}>Limpiar carrito</button>
                    </div>
                    {
                        cartQuantity() === 0 ?
                        <div>No hay productos en el carrito</div> :
                        <div className={styles.cartProductsPanel}>
                            { cart.map(prod => <CartItem key={prod.id} item={prod} />)  }
                        </div>
                    }
                    {/* <Link to="/">Buscar mas productos</Link>                     */}
                </div>
                <div className={styles.cartResume}>
                    <h3>Resumen del pedido</h3>
                    <span>Total: {total()}</span>
                    <Link to="/checkout">Pagar</Link>
                </div>
            </div>
        // )
    )
}

export default Cart