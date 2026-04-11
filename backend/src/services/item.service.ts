import * as repo from "../repositories/item.repository";
import {Item} from "../models/item.model";

export const createItemService = async (data: Item) => {
    return repo.createItem(data);
};

export const updateItemService = async (id: number, data: Item) => {
    return repo.updateItem(id, data);
};

export const deleteItemService = async (id: number) => {
    return repo.deleteItem(id);
}

export const getAllItemsService = async () => {
    return repo.getAllItems();
};