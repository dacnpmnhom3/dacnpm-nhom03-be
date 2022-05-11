// Importing node modules
import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import passport from "passport";
import configPassport from "../config/passport.js";
configPassport(passport);

// routes
import routes from "./routes/main.routes.js";
import productRouter from "./product/productRouter.js";
import authRouter from "./auth/auth.router.js";
import userRouter from "./users/userRouter.js";
import adminRouter from "./admins/adminRouter.js";
import sellerRouter from "./seller/sellerRouter.js";
import commentRouter from "./comment/commentRouter.js";

//DB config
import db from "../config/db.config.js";
import "../config/all.table.js";
import cors from "cors";



// // environment
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// const envPath = process.env.NODE_ENV !== 'production' ? `.env.${process.env.NODE_ENV}` : '.env';
// const config = require('dotenv').config({path: envPath});



//set up cors
const whitelist = ["http://localhost:3000", process.env.URL_WEB];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
// consts
const app = express();
db.sync().then(console.log("Syncing Database Done!"));
// db.authenticate().then((err) => {
//   console.log(err)
// })
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use("/", routes);
app.use("/api/products", productRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/comment", commentRouter);

// arrow functions
const port = process.env.PORT || 3000;

// console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === "production") {
//   console.log(process.env.NODE_ENV)
// }

const server = app.listen(port, () => {
  // destructuring
  const { address, port } = server.address();
  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});

export default app;
