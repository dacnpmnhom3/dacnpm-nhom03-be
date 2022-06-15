import joi from "@hapi/joi";
import Comment from "./CommentDomainModel";

const comment = (data) => {
    const comment = joi.object({
        user_id: joi.number().integer().required(),
        product_id: joi.string().required(),
        content: joi.string().required(),
        ancestor_comment: joi.string(),
        rating: joi.number().integer().min(0).max(5).required()
    });

    const newComment = {
        info: {},
        errMessage: '',
    };
    const validationResult = comment.validate(data);
    if (validationResult.error) {
        console.log(validationResult.error.details[0].message);
        newComment.errMessage = validationResult.error.details[0].message;

    }
    else {
        newComment.info = new Comment(parseInt(data.user_id), data.product_id, data.content, data.ancestor_comment, data.rating);
    }
    return newComment;
}

export { comment };
