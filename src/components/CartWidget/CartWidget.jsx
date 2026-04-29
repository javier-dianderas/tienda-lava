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
            <Link to="/cart">                
                <CartNotificationIcon count={cartQuantity()} ></CartNotificationIcon>
            </Link>            
        </div>
    )    
}

export default CartWidget