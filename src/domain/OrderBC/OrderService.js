// Handle business
import autoBind from "auto-bind";

// Utils
import HttpError from "../../utils/HttpError";
import HttpResponse from "../../utils/HttpResponse";
// Base service
import BaseService from "../../../base/BaseService";

import createOrder from "./OrderFactory";
import OrderRepository from "../../infrastructure/OrderBC/OrderRepository";

const orderRepository = new OrderRepository();

class OrderService extends BaseService {
  constructor() {
    super(orderRepository);
    autoBind(this);
  }

  async createAnOrder(data) {
    // Validate data and create object
    const newOrder = createOrder(data);

    if (newOrder.errMessage) {
      return new HttpError({
        statusCode: 400,
        message: newOrder.errMessage,
      });
    }

    // Create new order
    const result = await this.repository.create("order", newOrder.info);

    if (!result.isSuccess) {
      return new HttpError(result.message);
    }

    return new HttpResponse(result);
  }
}

export default new OrderService();
