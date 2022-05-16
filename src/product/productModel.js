// // const { Model, DataTypes } = require("sequelize");
// // const sequelize = require("../../config/db.config");

// import { Model, DataTypes } from "sequelize";
// import sequelize from "../../config/db.config.js";

// class Product extends Model {}
// Product.init(
//   {
//     title: { type: DataTypes.STRING, defaultValue: "" },
//     price: {
//       type: DataTypes.FLOAT,
//       defaultValue: 0,
//     },
//     desc: { type: DataTypes.STRING },
//     img: { type: DataTypes.STRING },
//     ownerId: { type: DataTypes.INTEGER, allowNull: false },
//     category: { type: DataTypes.STRING },
//     stock: { type: DataTypes.INTEGER },
//     isVerified: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     isPublished: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//   },
//   {
//     sequelize,
//     modelName: "Product",
//     paranoid: true,
//   }
// );

// export default Product;
