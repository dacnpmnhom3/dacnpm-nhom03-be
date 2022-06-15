import autoBind from "auto-bind";
import mongoose from "mongoose";

import ProductModel from "./product.model";
import BaseRepository from "../../../../base/BaseRepository";
import Category from "../Category/CategoryModel";
// eslint-disable-next-line no-unused-vars
// import StoreModel from "../../StoreBC/Store/store.model";

const { Types } = mongoose;

class ProductRepository extends BaseRepository {
  constructor() {
    super(ProductModel);
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
        ])
        .exec();
      const category = await Category.aggregate([
        { $match: { _id: Types.ObjectId(product.category_id) } },
        {
          $graphLookup: {
            from: "categories",
            startWith: "$ancestor_category",
            connectFromField: "ancestor_category",
            connectToField: "_id",
            as: "ancestor",
          },
        },
        {
          $project: {
            category_name: 1,
            ancestor: "$ancestor.category_name",
          },
        },
      ]).exec();

      let concatenateCatagory = category[0].category_name;
      category[0].ancestor.forEach((element) => {
        concatenateCatagory = `${element} > ${concatenateCatagory}`;
      });

      return {
        isSuccess: true,
        data: { ...product.toJSON(), category: concatenateCatagory },
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

  async getPendingProducts() {
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

export default ProductRepository;
