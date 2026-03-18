import styles from './CardProduct.module.scss';
import imagen from '../../assets/images/imagen-no-disponible.webp';

const CardProduct = ({marca, nombre, precio}) => {
    return (
        <div className={styles.wrapper}>
            <section>
                <a className={styles.anchor}>
                    <article className={styles.article}>
                        <div>
                            <img className={styles.image} src={imagen} alt='Imagen no disponible' />
                        </div>
                        <div className={`pt-2 ${styles.brand}`}>
                            <span>{marca}</span>
                        </div>
                        <div>
                            <span>{nombre}</span>
                        </div>
                        <div>
                            Precio: $ {precio}
                        </div>                        
                        <div className='pt-2'>
                            <button className={styles.button}>Agregar</button>
                        </div>
                    </article>
                </a>
            </section>
        </div>
    )
}

export default CardProduct