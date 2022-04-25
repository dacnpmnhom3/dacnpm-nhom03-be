import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.config.js";

class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    image: {
      type: DataTypes.STRING(300),
      defaultValue: "",
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    isLock: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isVerify: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    mailSecretCode: {
      type: DataTypes.STRING,
    },
    registerType: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "user",
    paranoid: true,
  }
);

export default User;