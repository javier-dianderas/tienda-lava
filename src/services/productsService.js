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

const getProductsByCategoryId = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!productos) {
                reject({ status: false, message: "No existen datos de productos"});
            }
            let productsByCategory = productos.filter(prod => prod.idCategoria === categoryId);
            resolve({ status: true, data: productsByCategory});
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

export { getProducts, getProductsByCategoryId, getProductById };