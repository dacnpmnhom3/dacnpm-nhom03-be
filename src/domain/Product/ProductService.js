// /* eslint-disable class-methods-use-this */
// import autoBind from "auto-bind";
// import Product from "./productDomainModel";
// import BaseSevice from "../../../base/BaseService";
// import { newProduct } from "./productFactory";
// import ProductRepository from "../../infrastructure/Product/ProductRepository";

// const productRepository = new ProductRepository();

// class ProductService extends BaseSevice {
//   constructor() {
//     super(Product);
//     autoBind(this);
//   }

//   async getAll() {
//     const response = {
//       status: "",
//       data: null,
//       message: "",
//     };
//     try {
//       const allProducts = await productRepository.getAllProduct();
//       if (allProducts.length > 0) {
//         response.status = 200;
//         response.data = allProducts;
//         response.message = "list of all product";
//         return response;
//       }
//       response.status = 500;
//       response.data = null;
//       response.message = "No Product found";
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

//   async insert(data) {
//     const response = {
//       status: "",
//       data: null,
//       message: "",
//     };
//     try {
//       const newProductData = newProduct(data);
//       if (newProductData.errMessage) {
//         response.status = 400;
//         response.data = null;
//         response.message = newProductData.errMessage;
//         return response;
//       }
//       const result = await productRepository.insert(newProductData.info);
//       if (result.isSuccess) {
//         response.status = 200;
//         response.data = result;
//         response.message = "Product inserted successfully";
//         return response;
//       }
//       response.status = 500;
//       response.data = null;
//       response.message = result.message;
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

//   async update(data) {
//     const response = {
//       status: "",
//       data: null,
//       message: "",
//     };
//     try {
//       const newProductData = newProduct(data);
//       if (newProductData.errMessage) {
//         response.status = 400;
//         response.data = null;
//         response.message = newProductData.errMessage;
//         return response;
//       }
//       const result = await productRepository.update(newProductData.info.id, newProductData.info);
//       if (result.isSuccess) {
//         response.status = 200;
//         response.data = result;
//         response.message = "Product updated successfully";
//         return response;
//       }
//       response.status = 500;
//       response.data = null;
//       response.message = result.message;
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }

//   async delete(id) {
//     const response = {
//       status: "",
//       data: null,
//       message: "",
//     };
//     try {
//       const result = await productRepository.delete(id);
//       if (result.isSuccess) {
//         response.status = 200;
//         response.data = result;
//         response.message = "Product deleted successfully";
//         return response;
//       }
//       response.status = 500;
//       response.data = null;
//       response.message = result.message;
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
// }

// export default ProductService;
