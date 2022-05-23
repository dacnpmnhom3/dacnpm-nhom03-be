import autoBind from "auto-bind";
import BaseSequelize from "../../base/BaseSequelize";
import productModel from "./productModel";


// thuộc repository pattern
// tuỳ vào chức năng mà ta thêm các hàm static cho đối tượng này

class AdminSequelize extends BaseSequelize {
    constructor() {
        super(productModel);
        autoBind(this);
    }
}

export default AdminSequelize;
