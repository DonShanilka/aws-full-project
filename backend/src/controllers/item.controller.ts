import {Request, Response, NextFunction} from "express";
import * as service from "../services/item.service";

export const createItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await service.createItemService(req.body);
        res.status(201).json(item);
    } catch (err){
        next(err);
    }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const item = await service.updateItemService(Number(req.params.id), req.body);
        res.json(item);
    } catch (err) {
        next(err);
    }
};