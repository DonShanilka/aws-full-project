import { Request, Response, NextFunction} from "express";
import * as service from "../services/customer.service";

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, email} = req.body;

        const customer = await service.createCustomerService({
            name,
            email
        });

        res.status(201).json(customer);
    } catch (err) {
        next(err);
    }
};

export const updateCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name, email} = req.body;

        const customer = await service.updateCustomerService(Number(req.params.id), {
            name,
            email
        });
        res.json(customer);
    } catch (err) {
        next(err);
    }
};