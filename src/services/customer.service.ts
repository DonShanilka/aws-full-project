import * as repo from "../repositories/customer.repository";
import {Customer} from "../models/customer.model";

export const createCustomerService = async (data: Customer) => {
    return repo.createCustomer(data);
}

