import autoBind from "auto-bind";
import HttpError from "../src/utils/HttpError";
import HttpResponse from "../src/utils/HttpResponse";

class BaseService {
  constructor(repository) {
    this.repository = repository;
    autoBind(this);
  }

  async update(id, data) {
    const result = this.repository.update(id, data);
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result);
  }

  async get(id) {
    const result = this.repository.get(id);
    if (!result.isSuccess) return new HttpError(result.error);

    return new HttpResponse(result);
  }
}

export default BaseService;
