import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/images/logo_blanco.webp"
import styles from "./Navbar.module.scss"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategories } from "../../services/categoriesService"

const Navbar = () => {
    const [categories, setCategories] = useState(null)

    useEffect(() => {
        getCategories()
            .then(response => {
                if(response.status) {
                    setCategories(response.data)
                }
            }).catch(error => {
                console.log("Ocurrió un error", error)
            })
            
    }, [])


    return (
        <nav className={styles.navbar}>
            <Link to={`/`}>
                <img src={logo} alt="Logo Lava" />
            </Link>
            <div>
                { categories !== null && categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.nombre}</NavLink>) }
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar