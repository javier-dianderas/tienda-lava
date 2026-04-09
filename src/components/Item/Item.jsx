import { Link } from "react-router";
import styles from "./Item.module.scss"

const Item = ({product}) => {
    return (
        <article className={styles.item}>
            <header className={styles.itemHeader}>
                <h2>{product.nombre}</h2>
            </header>
            <picture>
                <img className={styles.itemImage} src={product.imagenes[0]} />
            </picture>
            <section className={styles.itemSection}>
                <span className={styles.itemSectionBrand}>
                    {product.marca}
                </span>
                <div className={styles.itemSectionKeyValue}>
                    <span>Precio: </span>
                    <span>$ {product.precio}</span>
                </div>
                <div className={styles.itemSectionKeyValue}>
                    <span>Stock disponible: </span>
                    <span>{product.stock}</span>
                </div>
            </section>
            <footer className={styles.itemFooter}>
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
            </footer>
        </article>
    );
}

export default Item;