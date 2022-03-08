import express from 'express';
import wildersRouter from './wilder';

const router = express.Router();

router.use('/wilders', wildersRouter);

export default router;
