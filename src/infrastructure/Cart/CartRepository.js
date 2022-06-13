import autoBind from "auto-bind";
// import mongoose from "mongoose";

import CartModel from "./cartModel";
import BaseRepository from "../../../base/BaseRepository";

// const { Types } = mongoose;

class CartRepository extends BaseRepository {
  constructor() {
    super(CartModel);
    autoBind(this);
  }

  async get(id) {
    try {
    //   const cart2 = await this.model.findById(id);
      //   console.log(Types.ObjectId(cart2.product_variations_id))
      const cart = await this.model
        .findById(id)
        .populate([
          {
            path: "items.product_id",
            model: "Product",
            select: ["name", "variations"],
          },
        ])
        .populate([
          {
            path: "items.product_variations_id",
            model: "Product",
          },
        ]);
      return {
        isSuccess: true,
        data: { ...cart.toJSON() },
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error:
          error.message
          || "Some error occurred while getting Cart information!",
      };
    }
  }
}

export default CartRepository;
