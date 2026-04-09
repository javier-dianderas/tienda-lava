import Item from "../Item/Item";
import styles from "./ItemList.module.scss"

const ItemList = ({products}) => {
    return (
        <div className={styles.itemList}>
            {products.map(prod => <Item key={prod.id} product={prod} /> )}
        </div>
    );
}

export default ItemList;