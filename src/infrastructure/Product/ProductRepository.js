import autoBind from "auto-bind";

import ProductModel from "./ProductModel";
import BaseRepository from "../../../../base/BaseRepository";

class ProductRepository extends BaseRepository {
    constructor() {
        super(ProductModel);
        autoBind(this);
    }
}

export default AdminRepository;