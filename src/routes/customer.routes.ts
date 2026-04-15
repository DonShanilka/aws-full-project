import { Router } from "express";
import * as controller from "../controllers/customer.controller";

const router = Router();

router.post("/saveCustomer", controller.createCustomer);
router.get("/getAllCustomer", controller.getAllCustomer);
router.get("/getCustomerById/:id", controller.getCustomerById);
router.put("/updateCustomer/:id", controller.updateCustomer);
router.delete("/deleteCustomer/:id", controller.deleteCustomer);

export default router;