import BaseController from "../../base/BaseController";
import autoBind from "auto-bind";

import { validPassword, hashPassword, makeCode } from "../../helper/Utility";
import jwt from "jsonwebtoken";
import HttpResponse from "../../helper/HttpResponse";
import SellerService from "./sellerService";

const sellerService = new SellerService();

class SellerController extends BaseController {
  constructor() {
    super(sellerService);
    autoBind(this);
  }

  async login(req, res, next) {
    try {
      const data = req.body;
      const user = await this.service.findOneByEmail(data.email);

      if (!user) {
        return res.status(400).json({
          error: true,
          message: "The email you entered is not registered.",
        });
      }

      //Check Register type
      if (user.registerType == "socialLinked") {
        return res.status(400).json({
          error: true,
          message: "Please login with your social account.",
        });
      }

      //Check Password
      const isValid = await validPassword(data.password, user.password);
      if (!isValid) {
        return res.status(400).json({
          error: true,
          message: "The password you entered is not correct",
        });
      }

      //Check is verified, is lock
      const isVerified = user.isVerify === true;
      if (!isVerified) {
        return res.status(400).json({
          error: true,
          message: "Your email isn't verified. Please confirm your email.",
        });
      }

      const isLocked = user.isLock === true;
      if (isLocked) {
        return res.status(400).json({
          error: true,
          message: "Your account is locked.",
        });
      }

      //JWT
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 10000000,
      });

      return res.status(200).json(
        new HttpResponse({
          id: user.id,
          token: token,
          expiresIn: 10000000,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SellerController();
