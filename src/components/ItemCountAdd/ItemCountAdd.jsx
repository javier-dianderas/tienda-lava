import { useState } from "react"
import styles from "./ItemCountAdd.module.scss"
import ItemCount from "../ItemCount/ItemCount"

const ItemCountAdd = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    // const increment = () => {
    //     if(quantity < stock) {
    //         setQuantity(quantity + 1)
    //     }
    // }

    // const decrement = () => {
    //     if(quantity > 1) {
    //         setQuantity(quantity - 1)
    //     }
    // }

    const increment = (quantity) => {        
        setQuantity(quantity)        
    }

    const decrement = (quantity) => {        
        setQuantity(quantity)        
    }

    return (
        <div className={styles.itemCountAdd}>
            <ItemCount className={styles.itemCountComponent} stock={stock} initial={initial} onIncrement={increment} onDecrement={decrement} />
            <div className={styles.itemCountAddPanel}>
                <button className={styles.itemCountAddPanelButton} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default ItemCountAdd