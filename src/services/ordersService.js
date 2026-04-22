import { collection, getDoc, doc, runTransaction } from "firebase/firestore"
import { db } from "./firebase"

// const addOrder = async (order) => {
//     try {
//         await addDoc(collection(db, "ordenes"), order)
//         return { status: true }
//     } catch(err) {
//         return { status: false, message: `Error al insertar la orden: ${err}` }
//     }
// }

// const addOrder = async (order, ids) => {
//     const outOfStock = []
//     try {
//         const productosCollection = query(collection(db, "productos"), where(documentId(), "in", ids))

//         productosCollection.forEach(doc => {
//             const dataDoc = doc.data()
//             const stockDb = dataDoc.stock

//             const productAddedToCart = order.items.find(prod => prod.id = doc.id)
//             const prodQuantity = productAddedToCart.quantity

//             if(stockDb >= prodQuantity) {
//                 batch.update(doc.ref, {stock: stockDb - prodQuantity})
//             } else {
//                 outOfStock.push({id: doc.id, ...dataDoc})
//             }

//             if(outOfStock.length === 0) {
//                 await batch.commit()
//                 const ordenRef = collection(db, "ordenes")
//                 const ordenAdded = await addDoc(ordenRef, order)
//                 return ordenAdded.id
//             }
//         });
//         return { status: true }
//     } catch(err) {
//         return { status: false, message: `Error al insertar la orden: ${err}` }
//     }
// }

const addOrder = async (order) => {    
    try {
        const result = await runTransaction(db, async (transaction) => {
            const orderRef = doc(collection(db, "ordenes"))

            for(const item in order.items) {
                const productoRef = collection(db, "productos", item.id)
                const productoSnapshot = await transaction.get(productoRef)

                if(!productoSnapshot.exists()) {
                    throw new Error(`Producto no existe: ${item.nombre}`)
                }

                const data = productoSnapshot.data()
                
                if(data.stock < item.quantity) {
                    throw new Error(`No hay suficiente stock (${data.stock}) para el producto: ${item.nombre}`)
                }

                transaction.update(productoRef, {stock: data.stock - item.quantity})
            }

            transaction.set(orderRef, order)
            return orderRef.id
        })
        return { status: true, data: result.id }
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