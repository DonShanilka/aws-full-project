import { Item } from "./item.model";
import { Order } from "./order.model";

export interface OrderItem {
  id?: number;
  orderId: number;
  itemId: number;
  quantity: number;
  price: number;

  order?: Order;
  item?: Item;
}