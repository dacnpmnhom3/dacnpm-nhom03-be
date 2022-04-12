import autoBind from "auto-bind";
import BaseService from "../../base/BaseService";
import User from "./UserModel";
import { genSaltSync, hashSync } from "bcrypt";
const SALT_WORK_FACTOR = 10;

class UserService extends BaseService {
  constructor() {
    super(User);
    autoBind(this);
  }
  async hashPassword(password) {
    var salt = genSaltSync(SALT_WORK_FACTOR);
    var hash = hashSync(password, salt);
    return hash;
  }

  async updatePassword(id, data) {
    try {
      await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return { passwordChanged: true };
    } catch (errors) {
      throw errors;
    }
  }

  async getUserByEmail(email) {
    try {
      return await this.model.findOne({
        where: {
          email: email,
        },
      });
    } catch (errors) {
      throw errors;
    }
  }
}

export default UserService;
