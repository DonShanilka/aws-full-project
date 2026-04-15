import {prisma} from "../config/prisma";
import {Customer} from "../models/customer.model";

export const createCustomer = async (data: Customer) => {
    return prisma.customer.create({
        data: {
            name: data.name,
            email: data.email
        }
    })
};

export const updateCustomer = async (id: number, data: Customer) => {
    return prisma.customer.update({
        where: {id},
        data: {
            name: data.name,
            email: data.email
        }
    })
};

export const deleteCustomer = async (id: number) => {
    return prisma.customer.delete({
        where: {id}
    })
};