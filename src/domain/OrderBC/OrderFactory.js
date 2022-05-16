import orderStatus from "./OrderStatusValueObj";
import { Order, OrderItem } from "./OrderDomainModel";

const createItem = ({
  price,
  total,
  quantity,
  productId,
  discountId,
}) => {
  // Validate data

  const newItem = {
    info: {},
    errMessage: "",
  };

  newItem.info = new OrderItem({
    price,
    total,
    quantity,
    productId,
    discountId,
  });

  return newItem;
};

const createOrder = ({
  total,
  items,
  userId,
  shipDate,
  shipperId,
  receiverName,
  receiverPhone,
  paymentDetailId,
  receiverAddress,
}) => {
  // Validate data

  const newOrder = {
    info: {},
    errMessage: "",
  };

  const itemList = items && items.forEach((item) => createItem(item));

  newOrder.info = new Order({
    total,
    userId,
    shipDate,
    shipperId,
    receiverName,
    receiverPhone,
    items: itemList,
    paymentDetailId,
    receiverAddress,
    status: orderStatus.PROCESSING,
  });

  return newOrder;
};

export default createOrder;
