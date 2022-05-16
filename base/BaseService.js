import autoBind from "auto-bind";

class BaseService {
  constructor(repository) {
    this.repository = repository;
    autoBind(this);
  }
}

export default BaseService;
