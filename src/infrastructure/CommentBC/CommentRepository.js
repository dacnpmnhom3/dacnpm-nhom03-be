import autoBind from "auto-bind";

import CommentModel from "./CommentModel";
import BaseRepository from "../../../base/BaseRepository";

class CommentRepository extends BaseRepository {
    constructor() {
        super(CommentModel);
        autoBind(this);
    }

    async getAllComment(page, limit) {
        try {
            const allComments = await this.model.find({}, {}, { skip: (page) * limit, limit: limit });
            return allComments;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findById(id) {
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async insert(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findByProductId(productId) {
        try {
            const result = await this.model.find({ product_id: productId });
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findByUserId(id) {
        try {
            const result = await this.model.find({ user_id: id });
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async update(id, data) {
        try {
            const newComment = await this.model.findByIdAndUpdate(id, data);
            return { isSuccess: true, data: newComment };
        } catch (error) {
            console.error(error);
            return { isSuccess: false, data: error.message };
        }
    }
}

export default new CommentRepository();