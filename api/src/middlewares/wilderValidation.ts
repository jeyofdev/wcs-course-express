import express, { NextFunction, Request, Response } from 'express';
import { check, validationResult, ValidationError } from 'express-validator';

export const create = [
    check('name', 'The name must have at least 4 characters').isLength({
        min: 4,
    }),
    check('name', 'the name is required').not().isEmpty(),
    check('city', 'The city must have at least 4 characters').isLength({
        min: 2,
    }),
    check('city', 'the city is required').not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) => {
        const errorsValidation: any = validationResult(req);
        if (!errorsValidation.isEmpty()) {
            let errors = {};
            errorsValidation.errors.map(
                (err: any) => (errors = { ...errors, [err.param]: err.msg })
            );
            res.json({
                success: false,
                result: errors,
            });
        } else {
            next();
        }
    },
];