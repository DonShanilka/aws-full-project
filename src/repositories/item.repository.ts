import { prisma } from "../config/prisma";
import { Item } from "../models/item.model";

export const createItem = async (data: Item) => {
    return prisma.item.create({
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity
        }
    });
};

export const updateItem = async (id: number, data: Item) => {
    return prisma.item.update({
        where: { id },
        data: {
            name: data.name,
            price: data.price,
            quantity: data.quantity
        }
    });
};

export const deleteItem = async (id: number) => {
    return prisma.item.delete({
        where: { id }
    });
};

export const getItemById = async (id: number) => {
    return prisma.item.findUnique({
        where: { id }
    });
};

export const getAllItems = async () => {
    return prisma.item.findMany();
};