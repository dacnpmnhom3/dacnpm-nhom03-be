import autoBind from "auto-bind";

import BaseService from "../../../base/BaseService";
import CartRepository from "../../infrastructure/Cart/CartRepository";
import HttpError from "../../utils/HttpError";
import HttpResponse from "../../utils/HttpResponse";

const cartRepository = new CartRepository();

class CartService extends BaseService {
  constructor() {
    super(cartRepository);
    autoBind(this);
  }

  async getByUserId(userId) {
    const result = await this.repository.getUserId(userId);
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result.data);
  }

  async addToCard(userId, productId, quantity) {
    const result = await this.repository.addToCard(userId, productId, quantity);
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result.data);
  }
}

export default new CartService();
