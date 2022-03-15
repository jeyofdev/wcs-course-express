import express from 'express';
import { wilderValidation } from '../middlewares';
import {
    find,
    findById,
    save,
    update,
    remove,
} from '../controllers/wilderController';

const router = express.Router();

router.get('/', find);
router.get('/:id', findById);
router.post('/', wilderValidation.create, save);
router.put('/:id', wilderValidation.create, update);
router.delete('/:id', remove);

export default router;
