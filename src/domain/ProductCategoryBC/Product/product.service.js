// Handle business
import autoBind from "auto-bind";

import BaseService from "../../../../base/BaseService";
import ProductRepository from "../../../infrastructure/ProductCategoryBC/Product/ProductRepository";
import HttpError from "../../../utils/HttpError";
import HttpResponse from "../../../utils/HttpResponse";

const productRepository = new ProductRepository();

class ProductService extends BaseService {
  constructor() {
    super(productRepository);
    autoBind(this);
  }

  async getPendingProducts() {
    const result = this.repository.getPendingProducts();
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result);
  }
}

export default new ProductService();
