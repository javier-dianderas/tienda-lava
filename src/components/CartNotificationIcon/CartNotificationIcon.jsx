import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./CartNotificationIcon.module.scss"

const CartNotificationIcon = ({count}) => {
    return (
        <div className={styles.cartNotificationIcon}>
            <FontAwesomeIcon icon={faCartShopping} />
            {
                count > 0 && (
                    <span className={styles.cartNotificationIconBadge}>{count}</span>
                )
            }
        </div>
    )
}

export default CartNotificationIcon