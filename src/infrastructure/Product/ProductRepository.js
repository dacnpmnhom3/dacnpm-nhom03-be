import autoBind from "auto-bind";

import ProductModel from "./ProductModel";
import BaseRepository from "../../../base/BaseRepository";

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
        autoBind(this);
    }

    async getAllProduct() {
        try {
            const allProducts = await this.model.find();
            return allProducts;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default ProductRepository;