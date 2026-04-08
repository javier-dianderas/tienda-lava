import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
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
                            <ItemCount stock={product.stock} initial={1} onAdd={handleAddItem} />
                        )
                    }                    
                </footer>
            </article>
        );
}

export default ItemDetail