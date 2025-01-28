import { Request, Response, NextFunction } from "express";
import { checkSchema, matchedData, Schema, validationResult } from "express-validator";


export default function validateSchema(schema: Schema) {
    return async (req: Request, res: Response, next: NextFunction) => {
        await checkSchema(schema).run(req);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                errorMessage: "Validation failed",
                errors: errors.array(),
            });
            return;
        }
        req.matchedData = matchedData(req);
        next();
    };
}