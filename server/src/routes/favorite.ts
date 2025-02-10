import { Router } from "express";
import favoriteController from "../controllers/favorite"
import { authorize } from "../middlewares/user";
import validateSchema from "../middlewares/validation";
import { createFavoriteSchema } from "../validation/favorite";



const router = Router()

router.get("/", authorize({}), favoriteController.getAll)
router.post("/add", authorize({}), validateSchema(createFavoriteSchema), favoriteController.add);
router.delete("/:productId", authorize({}), favoriteController.remove)


export default router