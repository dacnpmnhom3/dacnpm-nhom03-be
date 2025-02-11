import BaseSevice from "../../base/BaseService.js";
import autoBind from "auto-bind";
import HttpResponse from "../../helper/HttpResponse.js";
import Seller from "./sellerModel.js";

class SellerService extends BaseSevice {
  constructor() {
    super(Seller);
    autoBind(this);
  }
  registerUser(data) {
    return new Promise((resolve, reject) => {
      this.model
        .create({
          email: data.email,
          password: data.password,
          phone: data.phone,
          name: data.name,
          mailSecretCode: data.code,
          image: data.image,
          registerType: "registered",
        })
        .then((result) => {
          resolve(HttpResponse.success(result));
        })
        .catch((error) => {
          reject(HttpResponse.error(error));
        });
    });
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
