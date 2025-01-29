import { Router } from "express";
import productController from "../controllers/product"
import validateSchema from "../middlewares/validation";
import { createProductSchema, editProductSchema, getAllProductSchema } from "../validation/product";
import { authorize } from "../middlewares/user";
import upload from "../middlewares/multer";


const router = Router();
router.get("/", validateSchema(getAllProductSchema), productController.getAll)

router.get("/:id", productController.getById)

router.post("/", authorize({ isAdmin: true }),
    upload.array("images", 8),
    validateSchema(createProductSchema),
    productController.create
)
router.put("/:id", authorize({ isAdmin: true }),
    upload.array("images", 8),
    validateSchema(editProductSchema),
    productController.update
)
router.delete("/:id", authorize({ isAdmin: true }), productController.remove)
export default router

