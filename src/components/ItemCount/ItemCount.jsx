import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import styles from "./ItemCount.module.scss"

const ItemCount = ({stock, initial, onIncrement, onDecrement, className = ""}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            const newQuantity = quantity + 1
            setQuantity(newQuantity)            
            if(onIncrement) {
                onIncrement(newQuantity)
            }
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            const newQuantity = quantity - 1
            setQuantity(newQuantity)
            if(onDecrement) {
                onDecrement(newQuantity)
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