import express from 'express';
import WilderModel from '../models/wilderModel';
import { wilderValidation } from '../middlewares';
import { listErrors } from '../utils/tools';

const router = express.Router();

/**
 * Get All wilders
 */
router.get('/', async (req, res) => {
    try {
        await WilderModel.init();
        const results = await WilderModel.find();

        res.status(200).json(results);
    } catch (err) {
        response.status(500).json({
            message: 'Error retrieving data from database',
            error: err.message,
        });
    }
});

/**
 * Get wilder by id
 */
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await WilderModel.init();
        const result = await WilderModel.findById(id);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving data from database',
            error: err.message,
        });
    }
});

/**
 * add wilder
 */
router.post('/', wilderValidation.create, async (req, res) => {
    try {
        await WilderModel.init();
        const newWilder = WilderModel(req.body);
        const result = await newWilder.save();

        res.status(200).json({ message: 'Wilder successfully saved', result });
    } catch (err) {
        res.status(500).json({
            message: 'Error saving the wilder',
            error: listErrors(err),
        });
    }
});

/**
 * Update wilder
 */
router.put('/:id', async (req, res) => {
    try {
        await WilderModel.init();
        const { id } = req.params;
        const result = await WilderModel.updateOne({ _id: id }, req.body);

        res.status(200).json({
            message: 'Wilder updated successfully',
            result,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error updating the movie',
            error: err.message,
        });
    }
});

/**
 * Delete wilder
 */
router.delete('/:id', async (req, res) => {
    try {
        await WilderModel.init();
        const { id } = req.params;
        const result = await WilderModel.deleteOne({ _id: id });

        res.status(200).json({
            message: 'Wilder deleted successfully',
            result,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting the wilder',
            error: err.message,
        });
    }
});

export default router;
