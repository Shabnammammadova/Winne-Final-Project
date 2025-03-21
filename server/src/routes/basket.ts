import { Router } from "express";
import basketController from "../controllers/basket"
import { authorize } from "../middlewares/user";
import validateSchema from "../middlewares/validation";
import { createBasketSchema } from "../validation/basket"


const router = Router()

router.get("/", authorize({}), basketController.getAll)
router.post("/add", authorize({}), validateSchema(createBasketSchema), basketController.add);
router.put("/quantity", authorize({}), basketController.quantity);
router.delete("/:productId", authorize({}), basketController.remove)
router.delete("/clear/:userId", basketController.removeAll);


export default router