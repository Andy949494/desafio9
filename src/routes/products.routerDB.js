import Routers from "./router.js";
import {getProducts, getProductsById, addProduct, updateProduct, deleteProduct,mockingproducts} from "../controllers/products.controller.js"
import {uploader} from '../utils.js';

export default class ProductsRouter extends Routers{
    init(){
        this.get('/', ["PUBLIC"], getProducts);

        this.get('/:pid', ["PUBLIC"], getProductsById);

        this.post('/', ["ADMIN"], uploader.array('thumbnails'), addProduct);

        this.put('/:pid', ["ADMIN"], updateProduct);

        this.delete('/:pid', ["ADMIN"], deleteProduct);

        this.post('/mockingproducts', ["PUBLIC"], mockingproducts)

    }
}