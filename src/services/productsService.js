import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

const getProducts = async () => {
    try {
        const productosCollection = collection(db, "productos")
        const productosSnapshot = await getDocs(productosCollection)
        const productos = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return { status: true, data: productos};
    }
    catch(err) {
        return { status: false, message: `Error al obtener productos: ${err}`}
    }
}

const getProductsByCategoryId = async (categoryId) => {
    try { 
        const productosCollection = query(collection(db, "productos"), where("idCategoria", "==", categoryId))
        const productosSnapshot = await getDocs(productosCollection)
        const productos = productosSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        return { status: true, data: productos};
    } catch (err) {
        return { status: false, message: `Error al obtener productos: ${err}`};
    }
}

const getProductById = async (id) => {
    try {
        const productoRef = doc(db, "productos", id)
        const productoSnapshot = await getDoc(productoRef)
        if(!productoSnapshot.exists()) {
            return { status: false, message: `No existe el producto con id ${id}` }
        }
        const producto = { id: productoSnapshot.id, ...productoSnapshot.data()}
        return { status: true, data: producto }
    } catch(err){
        return { status: false, message: `Error al obtener el producto: ${err}` }
    }
}

export { getProducts, getProductsByCategoryId, getProductById };