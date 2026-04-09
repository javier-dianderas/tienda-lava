import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import styles from "./ItemCount.module.scss"

const ItemCount = ({stock, initial, onIncrement, onDecrement, className = ""}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
            if(onIncrement) {
                onIncrement(quantity)
            }
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
            if(onDecrement) {
                onDecrement(quantity)
            }
        }
    }

    return (
        <div className={`${styles.itemCount} ${className}`}>
            <button className={styles.itemCountButton} onClick={decrement}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={styles.itemCountText}>{quantity}</span>
            <button className={styles.itemCountButton} onClick={increment}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default ItemCount;