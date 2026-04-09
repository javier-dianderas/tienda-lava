
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import ItemCount from "../ItemCount/ItemCount"
import styles from "./CartItem.module.scss"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({item}) => {

    //const [quantityModified, setQuantityModified] = useState(item.quantity)

    const { modifyItem, removeItem } = useContext(CartContext)

    const handleModifyQuantity = (quantityModified) => {
        //setQuantityModified(quantityModified)

        //Validar que pasa si llega a 0 el contador

        console.log("CartItem", quantityModified)
        modifyItem(item.id, quantityModified)
    }

    const handleRemoveItem = () => {
        removeItem(item.id)
    }

    return (
        <article className={styles.cartItem}>
            {/* <header>                
            </header> */}
            <picture>
                <img className={styles.cartItemImage} src={item.imagen} />
            </picture>
            <section className={styles.cartItemSection}>
                <span>{item.nombre}</span>
                <span className={styles.cardBrand}>
                    {item.marca}
                </span>
                <span>
                    Precio: $ {item.precio}
                </span>
                <span>
                    Stock disponible: {item.stock}
                </span>
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