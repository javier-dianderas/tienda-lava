import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h3>Tienda Virtual Lava</h3>
            <div>
                <button>Smartphones</button>
                <button>Tablets</button>
                <button>Smartwatches</button>
                <button>Accesorios para móvil</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar