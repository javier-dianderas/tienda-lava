import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import styles from "./CartWidget.module.scss"

const CartWidget = () => {
    return (
        <div className={styles.cart}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="px-2">0</span>
        </div>
    )    
}

export default CartWidget