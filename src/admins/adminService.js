import Admin from "./adminModel";
import BaseSevice from "../../base/BaseService";
import autoBind from "auto-bind";
import Product from "../product/productModel";

class AdminService extends BaseSevice {
  constructor() {
    super(Admin);
    autoBind(this);
  }
  async getAllAdmins() {
    try {
      const adminList = await Admin.findAll({
        attributes: { exclude: ["password", "updatedAt"] },
      });
      return adminList;
    } catch (error) {
      console.error(error);
      return {
        error:
          error.message || "Some error occurred while getting admins list!",
      };
    }
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
  async createAnAdmin(data) {
    try {
      const { fullName, email, password, phone, address } = data;
      await Admin.create({ fullName, email, password, phone, address });
      return { message: "Create admin successfully!" };
    } catch (error) {
      console.error(error);
      return {
        error: error.message || "Some error occurred while creating admin!",
      };
    }
  }
  async findOneById(adminId) {
    try {
      const foundUser = await Admin.findOne({
        where: { id: adminId },
        attributes: { exclude: "password" },
      });
      return foundUser;
    } catch (error) {
      console.error(error);
    }
  }
  async getPendingProducts() {
    try {
      const productList = await Product.findAll({
        where: { isVerified: false },
      });
      return productList;
    } catch (error) {
      console.error(error);
      return {
        error:
          error.message || "Some error occurred while getting admins list!",
      };
    }
  }
}

export default AdminService;
