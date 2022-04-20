import Comment from "./commentModel";
import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";
import HttpResponse from "../../helper/HttpResponse";

class CommentService extends BaseSevice {
  constructor() {
    super(Comment);
    autoBind(this);
  }
  async getAllCommentsByProductId(productId) {
    try {
      const allComments = await this.model.findAll({
        where: { productId: productId },
      });
      return allComments;
    } catch (error) {
      console.error(error);
    }
  }
}

export default CommentService;