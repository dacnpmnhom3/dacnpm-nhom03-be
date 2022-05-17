import dbConfig from "./db.data.js";
import { Sequelize } from "sequelize";
import mongoose from "mongoose";




// kết nối tới mysql bằng sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});


// kết nối tới mongodb bằng mongoes
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => {
    console.log(err);
  });


//---------------------------------------------------------------------------------------------------------------------------------------
// tuỳ vào việc sử dụng db nào mà export ra connection đó

export default mongoose;

// export default sequelize;
