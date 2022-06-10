import Comment from ".//commentDomainModel";
import BaseService from "../../../base/BaseService.js";
import autoBind from "auto-bind";
import { comment } from "./CommentFactory";
import commentRepository from "../../infrastructure/Comment/CommentRepository.js";

class CommentService extends BaseService {
    constructor() {
        super(commentRepository);
        autoBind(this);
    }
    async getAll(page, limit) {
        const response = {
            status: "",
            data: null,
            message: "",
        }
        try {
            const allComments = await this.repository.getAllComment(page, limit);
            if (allComments.length > 0) {
                response.status = 200;
                response.data = allComments;
                response.message = "list of all comment";
                return response;
            } else {
                response.status = 500;
                response.data = null;
                response.message = "No Comment found";
                return response;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async insert(data) {
        const response = {
            status: "",
            data: null,
            message: "",
        }
        try {
            const newComment = comment(data);
            if (newComment.errMessage) {
                response.status = 400;
                response.data = null;
                response.message = newComment.errMessage;
                return response;
            }
            const result = await this.repository.insert(newComment.info);
            if (result) {
                response.status = 200;
                response.data = result;
                response.message = "Comment inserted successfully";
                return response;
            } else {
                response.status = 500;
                response.data = null;
                response.message = "Comment not inserted";
                return response;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findByProductId(id) {
        const response = {
            status: "",
            data: null,
            message: "",
        }
        try {
            const allComments = await this.repository.findByProductId(id);
            if (allComments.length > 0) {
                response.status = 200;
                response.data = allComments;
                response.message = "list of all comment for product";
                return response;
            } else {
                response.status = 500;
                response.data = null;
                response.message = "No Comment found";
                return response;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    async findByUserId(id) {
        const response = {
            status: "",
            data: null,
            message: "",
        }
        try {
            const allComments = await this.repository.findByUserId(id);
            if (allComments.length > 0) {
                response.status = 200;
                response.data = allComments;
                response.message = "list of all comment of user";
                return response;
            } else {
                response.status = 500;
                response.data = null;
                response.message = "No Comment found";
                return response;
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new CommentService();