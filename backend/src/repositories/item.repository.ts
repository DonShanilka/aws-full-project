import prisma from "../config/prisma";
import {Item} from "../models/item.model";

export const createItem = async (data:Item) => {
    return prisma.item.create({data});
};

export const updateItem = async (id:number, data:Item) => {
    return prisma.item.update({
        where: {id},
        data,
    })
}