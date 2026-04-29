
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import ItemCount from "../ItemCount/ItemCount"
import styles from "./CartItem.module.scss"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { formatCurrency } from "../../utils/formatters"

const CartItem = ({item}) => {

    const { modifyItem, removeItem } = useContext(CartContext)

    const handleModifyQuantity = (quantityModified) => {
        modifyItem(item.id, quantityModified)
    }

    const handleRemoveItem = () => {
        removeItem(item.id)
    }

    return (
        <article className={styles.cartItem}>
            <picture>
                <img className={styles.cartItemImage} src={item.imagen} />
            </picture>
            <section className={styles.cartItemSection}>
                <span className={styles.cartItemSectionName}>
                    {item.nombre}
                </span>
                <span className={styles.cartItemSectionBrand}>
                    {item.marca}
                </span>
                <div className={styles.cartItemSectionKeyValue}>
                    <span>Precio: </span>
                    <span>{formatCurrency(item.precio)}</span>
                </div>
                <div className={styles.cartItemSectionKeyValue}>
                    <span>Stock disponible: </span>
                    <span>{item.stock}</span>
                </div>                
            </section>
            <footer className={styles.cartItemFooter}>
                <ItemCount className={styles.cartItemFooterItemCount} stock={item.stock} initial={item.quantity} onAdd={handleModifyQuantity} />
                <button className={styles.cartItemFooterButton} onClick={handleRemoveItem}>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </footer>
        </article>
    )
}

export default CartItem