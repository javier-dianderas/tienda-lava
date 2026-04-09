import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, qty) => {

        if(isInCart(item.id)) {
            setCart(
                cart.map(i => {
                    if(i.id === item.id) {
                        return {...i, quantity: i.quantity + qty}
                    } else {
                        return i
                    }
                })
            )
        } else {
            setCart([...cart, {...item, quantity: qty}])
        }
        
    }

    const modifyItem = (id, qty) => {
        if(isInCart(id)) {
            setCart(
                cart.map(i => {
                    if(i.id === id) {
                        return {...i, quantity: qty}
                    } else {
                        return i
                    }
                })
            )
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const total = () => {
        return cart.reduce((acc, item) => (acc += item.quantity * item.precio), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => (acc += item.quantity), 0)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    // const value = useMemo(() => {
    //     (cart, addItem, modifyItem, removeItem, clear, total, cartQuantity)
    // }, [cart])

    return (
        <CartContext.Provider value={{cart, addItem, modifyItem, removeItem, clear, total, cartQuantity}}>
            {children}
        </CartContext.Provider>
        // <CartContext.Provider value={{value}}>
        //     {children}
        // </CartContext.Provider>
    )
}