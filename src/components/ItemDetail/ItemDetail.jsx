import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetail.module.scss"

const ItemDetail = ({product}) => {

    const addItem = () => {
        console.log("producto agregado")
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
                    <ItemCount stock={product.stock} initial={1} onAdd={addItem} />
                </footer>
            </article>
        );
}

export default ItemDetail