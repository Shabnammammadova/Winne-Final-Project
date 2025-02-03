import { Schema } from "express-validator";

export const getAllFaqSchema: Schema = {
    question: {
        in: ["query"],
        isString: true,
        optional: true
    },
    answer: {
        in: ["query"],
        isString: true,
        optional: true
    }
}



export const createFaqSchema: Schema = {
    question: {
        in: ["body"],
        isString: true,
        notEmpty: {
            errorMessage: "Question is required"
        }
    },
    answer: {
        in: ["body"],
        isString: true,
        notEmpty: {
            errorMessage: "Answer is required"
        }
    }
}

export const editFaqSchema: Schema = {
    question: {
        in: ["query"],
        isString: true,
        optional: true
    },
    answer: {
        in: ["query"],
        isString: true,
        optional: true
    }
}