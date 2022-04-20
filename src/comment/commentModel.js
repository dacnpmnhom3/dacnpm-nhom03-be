import { Model, DataTypes } from "sequelize";
import sequelize from "../../config/db.config";

class Comment extends Model {}
Comment.init(
  {
    id: { type: DataTypes.INTEGER},
    userId: {
      type: DataTypes.INTEGER
    },
    productId: { type: DataTypes.INTEGER },
    content: { type: DataTypes.STRING },
    createdAt: { type: DataTypes.DATE},
  },
  {
    sequelize,
    modelName: "Comment",
    paranoid: true,
  }
);

export default Comment;
