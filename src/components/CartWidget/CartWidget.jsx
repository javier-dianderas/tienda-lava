import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import styles from "./CartWidget.module.scss"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router"

const CartWidget = () => {
    const context = useContext(CartContext);
    console.log(context);

    const { cartQuantity } = useContext(CartContext)

    return (
        <div className={styles.cart}>
            <Link to="/cart" style={{display: cartQuantity() > 0 ? "block" : "none"}}>
                <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            
            <span className="px-2">({cartQuantity()})</span>
        </div>
    )    
}

export default CartWidget