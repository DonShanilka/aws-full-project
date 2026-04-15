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

