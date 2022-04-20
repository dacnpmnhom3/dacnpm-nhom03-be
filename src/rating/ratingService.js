import Rating from "./RatingModel";
import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";
import HttpResponse from "../../helper/HttpResponse";

class RatingService extends BaseSevice {
  constructor() {
    super(Rating);
    autoBind(this);
  }
  async getAllRatingsByProductId(productId) {
    try {
      const allRatings = await this.model.findAll({
        where: { productId: productId },
      });
      return allRatings;
    } catch (error) {
      console.error(error);
    }
  }
  async getAllRatingsByUserId(userId) {
    try {
      const allRatings = await this.model.findAll({
        where: { userId: userId },
      });
      return allRatings;
    } catch (error) {
      console.error(error);
    }
  }
}

export default RatingService;