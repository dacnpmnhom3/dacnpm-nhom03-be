import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.config";

class Admin extends Model {}
Admin.init(
  {
    fullName: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING(255),
      defaultValue: "",
    },
    address: {
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
    modelName: "admin",
  }
);

export default Admin;