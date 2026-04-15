import {prisma} from "../config/prisma";
import {Customer} from "../models/customer.model";

export const createCustomer = async (data: Customer) => {
    return prisma.customer.create({
        data: {
            name: data.name,
            email: data.email,
        }
    })
}

