// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import styles from './App.module.scss'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

const App = () => {
  // return (
  //   <div className={styles.main}>
  //     <Navbar></Navbar>
  //     <ItemListContainer></ItemListContainer>
  //   </div>
  // )

  return (
    <div className={styles.main}>
      <Navbar></Navbar>

      <div className={styles.container}>
          {/* panel de filtros */}
          <div className={styles.filters}>
              <div className={styles.filtersTitle}>
                  Filtros
              </div>

              {/* categorias */}
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
              {/* marcas */}
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
              {/* rango de precios */}
              <div className={styles.filtersGroup}>
                  <div className="fw-bold">Rango de precios</div>
                  <div className={`pt-2 ${styles.filtersGroupRange}`}>
                      <input className="form-control" id="filtroPrecioMinimo" /> - <input className="form-control" id="filtroPrecioMaximo" />
                  </div>
              </div>
          </div>
          {/* panel de resultados */}
          <div className={styles.results}>
              {/* resumen de resultados */}
              <div className={styles.resultsBar}>
                  <span>7 productos</span>
                  <select id="ordenamiento" className="form-select" style={{width: 'auto'}}>
                      <option id="ordenamientoPrecioAlto">Precio mas alto</option>
                      <option id="ordenamientoPrecioBajo">Precio mas bajo</option>
                      <option id="ordenamientoNombreAscentente">Nombre (A-Z)</option>
                      <option id="ordenamientoNombreDescentente">Nombre (Z-A)</option>
                  </select>
              </div>
              {/* resultados */}
              <ItemListContainer />
              {/* <div className={styles.resultsContent}>                    
                  <CardProduct marca={productos[0].marca} nombre={productos[0].nombre} precio={productos[0].precio} />
                  <CardProduct marca={productos[1].marca} nombre={productos[1].nombre} precio={productos[1].precio} />
                  <CardProduct marca={productos[2].marca} nombre={productos[2].nombre} precio={productos[2].precio} />
                  <CardProduct marca={productos[3].marca} nombre={productos[3].nombre} precio={productos[3].precio} />
                  <CardProduct marca={productos[4].marca} nombre={productos[4].nombre} precio={productos[4].precio} />
                  <CardProduct marca={productos[5].marca} nombre={productos[5].nombre} precio={productos[5].precio} />
                  <CardProduct marca={productos[6].marca} nombre={productos[6].nombre} precio={productos[6].precio} />
              </div> */}
          </div>

      </div>


      
    </div>
  )
}

export default App
