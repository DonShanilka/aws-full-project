import { Router } from "express";
import * as controller from "../controllers/item.controller";

const router = Router();

router.post("/saveItem", controller.createItem);
router.get("/", controller.getAllItems);
router.get("/:id", controller.getItemById);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

export default router;