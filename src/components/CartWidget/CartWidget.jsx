import styles from "./CartWidget.module.scss"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router"
import CartNotificationIcon from "../CartNotificationIcon/CartNotificationIcon"

const CartWidget = () => {
    const context = useContext(CartContext);
    console.log(context);

    const { cartQuantity } = useContext(CartContext)

    return (
        <div className={styles.cartWidget}>
            {/* style={{display: cartQuantity() > 0 ? "block" : "none"}} */}
            <Link to="/cart">
                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                <CartNotificationIcon count={cartQuantity()} ></CartNotificationIcon>
            </Link>
            
            {/* <span className="px-2">({cartQuantity()})</span> */}
        </div>
    )    
}

export default CartWidget