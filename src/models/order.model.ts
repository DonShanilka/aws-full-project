import { OrderItem } from "@prisma/client";
import { Customer } from "./customer.model";

export interface Order {
  id?: number;
  customerId: number;
  totalAmount: number;
  createdAt?: Date;
  updatedAt?: Date;

  customer?: Customer
  orderItems?: OrderItem[];
}