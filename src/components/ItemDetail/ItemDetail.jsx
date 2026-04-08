import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss"
import { Link } from "react-router";

const ItemDetail = ({product}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0)

    const addItem = (quantity) => {
        console.log("producto agregado")
        setQuantityAdded(quantity)
    }

    return (
            <article className={styles.card}>
                <header>
                    <h2>{product.nombre}</h2>
                </header>
                <picture>
                    <img src={product.imagenes[0]} />
                </picture>
                <section>
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
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <Link to="/cart">Terminar compra</Link>
                        ) : (
                            <ItemCount stock={product.stock} initial={1} onAdd={addItem} />
                        )
                    }                    
                </footer>
            </article>
        );
}

export default ItemDetail