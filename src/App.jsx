// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import styles from './App.module.scss'
import { BrowserRouter, Route, Routes } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartProvider'

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
                        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                    </Routes>
                </CartProvider>
                {/* <div className={styles.container}>
                    <div className={styles.filters}>
                        <div className={styles.filtersTitle}>
                            Filtros
                        </div>
                        
                        <div className={styles.filtersGroup}>
                            <div className="fw-bold">Categorías</div>
                            <div className="pt-2">
                                <div className="form-check">
                                    <input className="form-check-input" id="checkSmartphones" type="checkbox" value="Smartphones" />
                                    <label className="form-check-label" for="checkSmartphones">Smartphones</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="checkTablets" type="checkbox" value="Tablets" />
                                    <label className="form-check-label" for="checkTablets">Tablets</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="checkSmartwatches" type="checkbox" value="Smartwatches" />
                                    <label className="form-check-label" for="checkSmartwatches">Smartwatches</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="checkAccesorios" type="checkbox" value="Accesorios" />
                                    <label className="form-check-label" for="checkAccesorios">Accesorios para móvil</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.filtersGroup}>
                            <div className="fw-bold">Marcas</div>
                            <div className="pt-2">
                                <div className="form-check">
                                    <input className="form-check-input" id="checkXiaomi" type="checkbox" value="Xiaomi" />
                                    <label className="form-check-label" for="checkXiaomi">Xiaomi</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="checkSamsung" type="checkbox" value="Samsung" />
                                    <label className="form-check-label" for="checkSamsung">Samsung</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="checkApple" type="checkbox" value="Apple" />
                                    <label className="form-check-label" for="checkApple">Apple</label>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.filtersGroup}>
                            <div className="fw-bold">Rango de precios</div>
                            <div className={`pt-2 ${styles.filtersGroupRange}`}>
                                <input className="form-control" id="filtroPrecioMinimo" /> - <input className="form-control" id="filtroPrecioMaximo" />
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.results}>
                        
                        <div className={styles.resultsBar}>
                            <span>7 productos</span>
                            <select id="ordenamiento" className="form-select" style={{width: 'auto'}}>
                                <option id="ordenamientoPrecioAlto">Precio mas alto</option>
                                <option id="ordenamientoPrecioBajo">Precio mas bajo</option>
                                <option id="ordenamientoNombreAscentente">Nombre (A-Z)</option>
                                <option id="ordenamientoNombreDescentente">Nombre (Z-A)</option>
                            </select>
                        </div>
                        
                        <ItemListContainer />
                    </div>

                </div>             */}
            </BrowserRouter>
        </div>
    )
}

export default App
