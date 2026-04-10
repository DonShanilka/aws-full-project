import * as repo from "../repositories/item.repository";
import {Item} from "../models/item.model";

export const createItemService = async (data: Item) => {
    return repo.createItem(data);
};

