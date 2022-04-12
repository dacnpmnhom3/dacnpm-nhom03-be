import BaseController from "../../base/BaseController";
import autoBind from "auto-bind";
import SellerService from "./sellerService";
import EmailHelper from "../../helper/email/EmailHelper";
import SaveHelper from "../../helper/file/FileSaveHelper";
const mailer = new EmailHelper();
const saver = new SaveHelper();

class SellerController extends BaseController {
  constructor() {
    super(new SellerService());
    autoBind(this);
  }
  async test(req, res, next) {
    try {
      const content = {
        link: "http://localhost:3000/seller/register",
      };
      const mailOptions = {
        from: req.body.from,
        to: req.body.to,
      };
      const result = await mailer.sendRegisterSeller(
        mailOptions.from,
        mailOptions.to,
        content
      );
      res.status(200).json({
        message: "Send mail success",
        result: result,
      });
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  }
  async upload(req, res, next) {
    try {
      console.log("file: " + req.file.path);
      const result = await saver.saveImage(req.file.path);
      res.status(200).json({
        message: "Upload success",
        result: result,
      });
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  }

  async uploadVideo(req, res, next) {
    try {
      console.log("file: " + req.file.path);
      const result = await saver.saveVideo(req.file.path);
      res.status(200).json({
        message: "Upload success",
        result: result,
      });
    } catch (error) {
      console.log({ error });
      res.status(500).send(error);
    }
  }
}

export default new SellerController();
