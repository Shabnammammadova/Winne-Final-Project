import { Router } from "express";
import blogController from "../controllers/blog"
import validateSchema from "../middlewares/validation";
import { authorize } from "../middlewares/user";
import upload from "../middlewares/multer";
import { createBlogSchema, editBlogSchema, getAllBlogSchema } from "../validation/blog";


const router = Router();
router.get("/", validateSchema(getAllBlogSchema), blogController.getAll)

router.get("/:id", blogController.getById)

router.post("/", authorize({ isAdmin: true }),
    upload.array("images", 8),
    validateSchema(createBlogSchema),
    blogController.create
)
router.put("/:id", authorize({ isAdmin: true }),
    upload.array("images", 8),
    validateSchema(editBlogSchema),
    blogController.update
)
router.delete("/:id", authorize({ isAdmin: true }), blogController.remove)
export default router

