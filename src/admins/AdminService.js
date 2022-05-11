import Admin from "./adminModel";
import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";

class AdminService extends BaseSevice {
  constructor() {
    super(Admin);
    autoBind(this);
  }

  async findOneByEmail(email) {
    try {
      const foundAdmin = await this.model.findOne({
        where: { email: email },
      });
      return foundAdmin;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async registerAdmin(data) {
    try {
      await this.model.create({
        email: data.email,
        password: data.password,
        phone: data.phone,
        fullName: data.name,
        address: data.address,
      });
      return { message: "Register new admin successfully!" };
    } catch (error) {
      console.error(error);
      return {
        error: error.message || "Some error occurred while creating Admin!",
      };
    }
  }
}

export default AdminService;