import { Router } from "express";
import basketController from "../controllers/basket"
import { authorize } from "../middlewares/user";
import validateSchema from "../middlewares/validation";
import { createBasketSchema } from "../validation/basket"


const router = Router()

router.get("/", authorize({}), basketController.getAll)
router.post("/", authorize({}), validateSchema(createBasketSchema), basketController.add);
router.put("/quantity", authorize({}), basketController.quantity);
router.delete("/:id", authorize({}), basketController.remove)


export default router