import { addDoc, collection, getDoc } from "firebase/firestore"
import { db } from "./firebase"

const addOrder = async (order) => {
    try {
        await addDoc(collection(db, "ordenes"), order)
        return { status: true }
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