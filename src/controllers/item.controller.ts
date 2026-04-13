import { Request, Response, NextFunction } from "express";
import * as service from "../services/item.service";

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, quantity } = req.body;

        const item = await service.createItemService({
            name,
            price,
            quantity
        });

        res.status(201).json(item);
    } catch (err) {
        next(err);
    }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, price, quantity } = req.body;

        const item = await service.updateItemService(Number(req.params.id), {
            name,
            price,
            quantity
        });

        res.json(item);
    } catch (err) {
        next(err);
    }
};

export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await service.deleteItemService(Number(req.params.id));
        res.json({ message: "Item Deleted" });
    } catch (err) {
        next(err);
    }
};

export const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await service.getAllItemsService();
        res.json(items);
    } catch (err) {
        next(err);
    }
};

export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await service.getItemByIdService(Number(req.params.id));
        res.json(item);
    } catch (err) {
        next(err);
    }
};