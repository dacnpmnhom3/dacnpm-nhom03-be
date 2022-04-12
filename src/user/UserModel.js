import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.config";

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
  },
  {
    sequelize,
    modelName: "User",
    paranoid: true,
  }
);

export default User;
