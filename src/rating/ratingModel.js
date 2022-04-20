import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.config";

class Rating extends Model {}
Rating.init(
  {
    id: { type: DataTypes.INTEGER},
    userId: {
      type: DataTypes.INTEGER
    },
    productId: { type: DataTypes.INTEGER },
    eggs: { type: DataTypes.FLOAT },
  },
  {
    sequelize,
    modelName: "Rating",
    paranoid: true,
  }
);

export default Rating;
