import { productos } from "../assets/data/datos";

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!productos) {
                reject({ status: false, message: "No existen datos de productos"});
            }
            resolve({ status: true, data: productos});
        }, 1000);
    });
}

const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!productos) {
                reject({ status: false, message: "No existen datos de productos"});
            }
            let product = productos.find(prod => prod.id === id);
            resolve({status: true, data: product});
        }, 1000);
    });
}

export { getProducts, getProductById };