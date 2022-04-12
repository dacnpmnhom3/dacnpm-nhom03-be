import Product from "./productModel";
import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";
import HttpResponse from "../../helper/HttpResponse";

class ProductService extends BaseSevice {
  constructor() {
    super(Product);
    autoBind(this);
  }
}

export default ProductService;
