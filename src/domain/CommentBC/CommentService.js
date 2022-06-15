import Comment from "./commentDomainModel";
import BaseService from "../../../base/BaseService.js";
import autoBind from "auto-bind";
import { comment } from "./CommentFactory";
import commentRepository from "../../infrastructure/CommentBC/CommentRepository.js";
import HttpError from "../../utils/HttpError.js";
import HttpResponse from "../../utils/HttpResponse";


class CommentService extends BaseService {
    constructor() {
        super(commentRepository);
        autoBind(this);
    }
    async getAll(page, limit) {
        const result = await this.repository.getAll(page, limit);
        if (!result.isSuccess) {
            return new HttpError(result.message);
        }
        return new HttpResponse(result.data);
    }

    async insert(data) {
        try {
            const newComment = comment(data);
            if (newComment.errMessage) {
                return new HttpError(newComment.errMessage);
            }
            const result = await this.repository.insert(newComment.info);
            if (!result.isSuccess) {
                return new HttpError(result.message);
            }
            return new HttpResponse(result.data);
        } catch (error) {
            console.error(error);
            return new HttpError(error);
        }
    }

    async findByProductId(id) {
        try {
            const result = await this.repository.findByProductId(id);
            if (!result.isSuccess) {
                return new HttpError(result.message);
            }
            return new HttpResponse(result.data);

        } catch (error) {
            console.error(error);
            return new HttpError(error.message);
        }

    }

    async findByUserId(id) {
        try {
            const result = await this.repository.findByUserId(id);
            if (!result.isSuccess) {
                return new HttpError(result.message);
            }
            return new HttpResponse(result.data);
        } catch (error) {
            console.error(error);
            return new HttpError(error.message);
        }
    }

    async findUserIDofComment(commentId) {
        const result = await this.repository.findById(commentId);
        if (result) {
            return result.user_id;
        }
        return false;
    }

    // async findOwnerOfComment(id) {
    //     const response = {
    //         status: "",
    //         data: null,
    //         message: "",
    //     }
    //     try {
    //         const allComments = await this.repository.findById(id);
    //         if (allComments) {
    //             // use grpc client to get user info
    //             const user_id = {
    //                 id: allComments.user_id
    //             };
    //             grpcClient.get(user_id, (error, admin) => {
    //                 if (error) {
    //                     console.log(error);
    //                 } else {
    //                     response.status = 200;
    //                     response.data = admin;
    //                     console.log(admin);
    //                     response.message = "user info";
    //                     return response;
    //                 }
    //             });
    //         } else {
    //             response.status = 500;
    //             response.data = null;
    //             response.message = "No Comment found";
    //             return response;
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }

    async update(id, data) {
        const updateComment = comment(data);
        // validate failed
        if (updateComment.errMessage) {
            return new HttpError(updateComment.errMessage);
        }

        // update
        const result = await this.repository.update(id, updateComment.info);
        if (!result.isSuccess) {
            return new HttpError(result.message);
        }
        return new HttpResponse(result.data);
    }


    async findById(id) {
        const result = await this.repository.findById(id);
        if (!result.isSuccess) {
            return new HttpError(result.message);
        }
        return new HttpResponse(result.data);
    }
}

export default new CommentService();