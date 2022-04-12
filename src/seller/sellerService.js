import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";
import User from "../users/userModel";

class SellerService extends BaseSevice {
  constructor() {
    super(User);
    autoBind(this);
  }

  async findOneByEmail(email) {
    try {
      const foundUser = await this.model.findOne({
        where: { email: email },
      });
      return foundUser;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default SellerService;
