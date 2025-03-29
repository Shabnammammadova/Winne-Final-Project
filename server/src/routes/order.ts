import { Router } from "express";
import orderController from "../controllers/order"
import { authorize } from "../middlewares/user";
import validateSchema from "../middlewares/validation";
import { changeStatusSchema, createOrderSchema } from "../validation/order";


const router = Router()

router.get("/", authorize({}), orderController.getAll)
router.post("/", authorize({}), validateSchema(createOrderSchema), orderController.create)
router.patch("/:id/cancel", authorize({}), orderController.cancel)
router.patch("/:id/change-status", authorize({ isAdmin: true }),
    validateSchema(changeStatusSchema),
    orderController.changeStatus)



export default router