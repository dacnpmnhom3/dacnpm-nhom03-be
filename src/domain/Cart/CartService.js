import autoBind from "auto-bind";

import BaseService from "../../../base/BaseService";
import CartRepository from "../../infrastructure/Cart/CartRepository";
// import HttpError from "../../utils/HttpError";
// import HttpResponse from "../../utils/HttpResponse";

const cartRepository = new CartRepository();

class CartService extends BaseService {
  constructor() {
    super(cartRepository);
    autoBind(this);
  }
}

export default new CartService();
