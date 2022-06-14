/* eslint-disable max-len */
// Handle business
import autoBind from "auto-bind";

import BaseService from "../../../../base/BaseService";
import ProductRepository from "../../../infrastructure/ProductCategoryBC/Product/productRepository";
import HttpError from "../../../utils/HttpError";
import HttpResponse from "../../../utils/HttpResponse";

const productRepository = new ProductRepository();

class ProductService extends BaseService {
  constructor() {
    super(productRepository);
    autoBind(this);
  }

  async getPendingProducts() {
    const result = await this.repository.getPendingProducts();
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result.data);
  }
}

export default new ProductService();
