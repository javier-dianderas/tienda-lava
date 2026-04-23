import { collection, getDoc, doc, runTransaction } from "firebase/firestore"
import { db } from "./firebase"

const addOrder = async (order) => {    
    try {
        const result = await runTransaction(db, async (transaction) => {

            const productos = []

            for(const item of order.items) {
                const productoRef = doc(db, "productos", item.id)
                const productoSnapshot = await transaction.get(productoRef)

                if(!productoSnapshot.exists()) {
                    throw new Error(`Producto no existe: ${item.nombre}`)
                }

                const data = productoSnapshot.data()
                
                if(data.stock < item.quantity) {
                    throw new Error(`No hay suficiente stock (${data.stock}) para el producto: ${item.nombre}`)
                }

                productos.push({
                    ref: productoRef,
                    stock: data.stock,
                    quantity: item.quantity
                })
            }

            productos.forEach(({ref, stock, quantity}) => {
                transaction.update(ref, {stock: stock - quantity})
            })

            const orderRef = doc(collection(db, "ordenes"))
            transaction.set(orderRef, order)
            return orderRef.id
        })
        return { status: true, data: result }
    } catch(err) {
        return { status: false, message: `Error al insertar la orden: ${err}` }
    }
}

const getOrder = async (id) => {
    try {
        const ordenRef = collection(db, "ordenes", id)
        const ordenSnapshot = await getDoc(ordenRef)
        if(!ordenSnapshot.exists()) {
            return { status: false, message: `No existe la orden con id ${id}` }
        }
        const orden = { id: ordenSnapshot.id, ...ordenSnapshot.data() }
        return { status: true, data: orden }
    } catch(err) {
        return { status: false, message: `Error al obtener la orden: ${err}` }
    }
}

export { addOrder, getOrder }