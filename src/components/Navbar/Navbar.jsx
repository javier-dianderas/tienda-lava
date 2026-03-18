import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/images/logo_blanco.webp"
import styles from "./Navbar.module.scss"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="Logo Lava" />
            <CartWidget />
        </nav>
    )
}

export default Navbar