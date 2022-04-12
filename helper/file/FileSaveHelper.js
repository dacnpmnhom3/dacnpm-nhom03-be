import cloudinary from "cloudinary";
import config from "./CloudinaryConfig";

class SaveHelper {
  constructor() {
    cloudinary.config(config);
  }

  saveImage(file) {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(file, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default SaveHelper;
