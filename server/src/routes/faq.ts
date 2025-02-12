import { Router } from "express";
import faqController from "../controllers/faq"
import { authorize } from "../middlewares/user";
import validateSchema from "../middlewares/validation";
import { createFaqSchema, editFaqSchema } from "../validation/faq";


const router = Router()

router.get("/", faqController.getAll);
router.get("/:id", faqController.getById);
router.post("/", authorize({ isAdmin: true }),
    validateSchema(createFaqSchema),
    faqController.create),
    router.put("/:id", authorize({ isAdmin: true }),
        validateSchema(editFaqSchema),
        faqController.update),
    router.delete("/:id", authorize({ isAdmin: true }),
        faqController.remove
    )

export default router;