import autoBind from "auto-bind";

// eslint-disable-next-line no-unused-vars
import DiscountModel from "../../StoreBC/Discount/discount.model";
import StoreOrderModel from "./StoreOrderModel";
import BaseRepository from "../../../../base/BaseRepository";
// eslint-disable-next-line no-unused-vars
// import StoreModel from "../../StoreBC/Store/store.model";

// const { Types } = mongoose;

class StoreOrderRepository extends BaseRepository {
  constructor() {
    super(StoreOrderModel);
    autoBind(this);
  }

  async get(id) {
    try {
      const product = await this.model
        .findById(id)
        .populate([
          {
            path: "store_id",
            model: "Store",
            select: ["store_name", "store_image"],
          },
          {
            path: "discount_id",
            model: "Discount",
            select: ["name", "description", "discount_percent"],
          },
        ])
        .exec();

      return {
        isSuccess: true,
        data: { ...product.toJSON() },
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error:
          error.message
          || "Some error occurred while getting product information!",
      };
    }
  }

  async getPendingOrders() {
    try {
      const productList = await this.model
        .find({ status: "pending" })
        .select({ variations: 0, properties: 0 })
        .sort({ createdAt: -1 })
        .populate([
          {
            path: "store_id",
            model: "Store",
            select: ["store_name", "store_image"],
          },
        ])
        .exec();
      return { isSuccess: true, data: productList };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error:
          error.message
          || "Some error occurred while getting pending products!",
      };
    }
  }
}

export default StoreOrderRepository;
