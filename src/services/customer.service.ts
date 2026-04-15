import * as repo from "../repositories/customer.repository";
import {Customer} from "../models/customer.model";

export const createCustomerService = async (data: Customer) => {
    return repo.createCustomer(data);
};

export const updateCustomerService = async (id: number, data: Customer) => {
    return repo.updateCustomer(id, data);
};

export const deleteCustomerService = async (id: number) => {
    return repo.deleteCustomer(id);
}

export const getAllCustomerService = async () => {
    return repo.getAllCustomer();
}

export const getCustomerById = async (id: number) => {
    const customer = await repo.getCustomerById(id);
    if (!customer) throw new Error("Customer Not Found");
    return customer;
}