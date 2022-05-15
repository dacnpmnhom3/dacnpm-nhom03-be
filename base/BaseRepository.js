import autoBind from "auto-bind";

class BaseRepository {
  constructor(model) {
    this.model = model;
    autoBind(this);
  }

  async create(modelName, data) {
    try {
      const obj = await this.model(data).save();

      return {
        obj,
        isSuccess: true,
        message: `Register new ${modelName} successfully!`,
      };
    } catch (error) {
      console.error(error);
      return {
        isSuccess: false,
        error: error.message || `Some error occurred while creating ${modelName}!`,
      };
    }
  }
}

export default BaseRepository;
