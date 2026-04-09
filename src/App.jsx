// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import styles from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartProvider'
import Cart from './components/Cart/Cart'

const App = () => {

    return (
        <div className={styles.main}>            
            <BrowserRouter>
                <CartProvider>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='/' element={<ItemListContainer />} />
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
