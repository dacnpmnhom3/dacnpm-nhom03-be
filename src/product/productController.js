import ProductService from "./productSevice";
import BaseController from "../../base/BaseController";
import autoBind from "auto-bind";

const productSevice = new ProductService();

class ProductController extends BaseController {
  constructor() {
    super(productSevice);
    autoBind(this);
  }
  async test(req, res, next) {
    try {
      /*  #swagger.tags = ['TST']
          #swagger.description = 'Endpoint testing' */
      const response = {
        name: "aylmao",
        ...req.user,
      };
      /* #swagger.responses[200] = {
                schema: { "$ref": "#/definitions/tst" },
                description: "TST successfully." } */
      return res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export default new ProductController();
