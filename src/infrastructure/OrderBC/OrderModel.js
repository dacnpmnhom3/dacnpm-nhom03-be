import mongoose from "mongoose";

const { Schema, model } = mongoose;

const orders = new Schema({
  total: { type: Number },
  status: { type: String },
  userId: { type: Number },
  shipDate: { type: Date },
  receiverName: { type: String },
  receiverPhone: { type: String },
  receiverAddress: { type: String },
  paymentDetailId: { type: Number },
  shipperIdd: { type: Schema.Types.ObjectId },
  items: [
    {
      price: { type: Number },
      total: { type: Number },
      quantity: { type: Number },
      productId: { type: Schema.Types.ObjectId },
      discountId: { type: Schema.Types.ObjectId },
    },
  ],
});

const Orders = model("orders", orders);
export default Orders;
