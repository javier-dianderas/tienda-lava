import styles from "./AsyncResult.module.scss"

const AsyncResult = ({loading, messageLoading, error, children }) => {
    if(loading) {        
        return (
            <div className={styles.asyncResult}>
                <div className={styles.loader}></div>
                <span className={styles.asyncResultSpan}>{messageLoading || "Cargando"}...</span>
            </div>
        )
    }

    if(error) {
        return (
            <div className={styles.asyncResult}>
                <span className={styles.asyncResultSpan}>{error}</span>
            </div>
        )
    }

    return children
}

export default AsyncResult