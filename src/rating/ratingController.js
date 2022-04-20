import RatingService from "./ratingService";
import BaseController from "../../base/BaseController";
import autoBind from "auto-bind";

const RatingSevice = new RatingService();

class RatingController extends BaseController {
  constructor() {
    super(RatingSevice);
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
  async getAll(req, res, next) {
    try {
      const result = await this.service.getAllRatingsByProductId(req.body.productId);

      return res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  }
  async insert(req, res, next) {
    try {
      const data = { ...req.body };
      const response = await this.service.insert(data);

      return res.status(response.statusCode).json(response);
    } catch (e) {
      next(e);
    }
  }
}
export default new RatingController();