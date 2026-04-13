import { Router } from "express";
import * as controller from "../controllers/item.controller";

const router = Router();

router.post("/saveItem", controller.createItem);
router.get("/getAllItem", controller.getAllItems);
router.get("/getItemById/:id", controller.getItemById);
router.put("/updateItem/:id", controller.updateItem);
router.delete("/deleteItem/:id", controller.deleteItem);

export default router;