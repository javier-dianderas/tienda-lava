import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import styles from "./ItemCount.module.scss"

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={styles.itemCount}>
            <div>
                <button onClick={decrement}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <h4>{quantity}</h4>
                <button onClick={increment}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCount;