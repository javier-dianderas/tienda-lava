import { useContext, useState } from "react";
import ItemCountAdd from "../ItemCountAdd/ItemCountAdd";
import styles from "./ItemDetail.module.scss"
import { Link } from "react-router";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({product}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleAddItem = (quantity) => {
        console.log("producto agregado")
        setQuantityAdded(quantity)

        const item = {
            id: product.id, 
            nombre: product.nombre,
            marca: product.marca, 
            precio: product.precio,
            stock: product.stock,
            imagen: product.imagenes[0]
        }
        addItem(item, quantity)
    }

    return (
            <div className={styles.itemDetail}>
                <article className={styles.itemDetailCard}>
                    <header className={styles.itemDetailCardHeader}>
                        <h2>{product.nombre}</h2>
                    </header>
                    <picture>
                        <img className={styles.itemDetailCardImage} src={product.imagenes[0]} />
                    </picture>
                    <section className={styles.itemDetailCardSection}>
                        <p className={styles.cardBrand}>
                            {product.marca}
                        </p>
                        <p>
                            Precio: $ {product.precio}
                        </p>
                        <p>
                            Stock disponible: {product.stock}
                        </p>
                    </section>
                    <footer className={styles.itemDetailCardFooter}>
                        {
                            quantityAdded > 0 ? (
                                <Link to="/cart">Terminar compra</Link>
                            ) : (
                                <ItemCountAdd stock={product.stock} initial={1} onAdd={handleAddItem} />
                            )
                        }                    
                    </footer>
                </article>
            </div>
        );
}

export default ItemDetail