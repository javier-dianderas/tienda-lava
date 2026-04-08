import { Link } from "react-router";
import styles from "./Item.module.scss"

const Item = ({product}) => {
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
                {/* <button>Ver detalle</button> */}
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
            </footer>
        </article>
    );
}

export default Item;