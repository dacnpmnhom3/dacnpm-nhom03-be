import CommentService from "../../domain/Comment/CommentService";
import BaseController from "../../../base/BaseController.js";
import autoBind from "auto-bind";
import { getPage } from "../../../utils/pagination";
class CommentController extends BaseController {
    constructor() {
        super(CommentService);
        autoBind(this);
    }

    async getAll(req, res) {
        const reqPage = req.query.page;
        const page = getPage(reqPage);
        const limit = 10;
        const response = await this.service.getAll(page, limit);
        return res.status(response.status).json(response);

    }

    async insertComment(req, res) {
        const response = await this.service.insert(req.body);
        return res.status(response.status).json(response);
    }

    async findByProductId(req, res) {
        const { id } = req.params;
        const response = await this.service.findByProductId(id);
        return res.status(response.status).json(response);
    }

    async findByUserId(req, res) {
        const { id } = req.params;
        const response = await this.service.findByUserId(id);
        return res.status(response.status).json(response);
    }
}

export default new CommentController();