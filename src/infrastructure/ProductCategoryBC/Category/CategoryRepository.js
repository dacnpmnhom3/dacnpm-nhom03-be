import autoBind from "auto-bind";

import CategoryModel from "./CategoryModel";
import BaseRepository from "../../../../base/BaseRepository";

class CategoryRepository extends BaseRepository {
  constructor() {
    super(CategoryModel);
    autoBind(this);
  }
}

export default CategoryRepository;
