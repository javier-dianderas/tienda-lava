import { categorias } from "../assets/data/datos"

const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!categorias) {
                reject({ status: false, message: "No existen datos de categorias"});
            }
            resolve({ status: true, data: categorias});
        }, 1000);
    });
}

export { getCategories };