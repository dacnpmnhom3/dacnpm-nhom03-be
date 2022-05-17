import autoBind from "auto-bind";


// thuộc repository pattern
class BaseSequelize {
    constructor(model) {
        this.model = model;
        autoBind(this);
    }

    async findOneByName(name) {
        try {
            const foundProduct = await this.model.findOne({ name: name });

            if (foundProduct) {
                return {
                    isSuccess: true,
                    data: foundProduct,
                };
            } else {
                return {
                    isSuccess: false
                };
            }
        } catch (error) {
            console.error(error);
            return {
                isSuccess: false
            };
        }
    }

    async create(data) {
        try {
            const item = await this.model(data).save();

            return {
                isSuccess: true,
                message: "Add product successfully!",
            };
        } catch (error) {
            console.error(error);
            return {
                isSuccess: false,
                error: error.message || "Some error occurred while creating Product!!",
            };
        }
    }
}

export default BaseSequelize;