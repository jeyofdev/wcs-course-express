import WilderModel from '../models/wilderModel';
import { wilderValidation } from '../middlewares';
import { listErrors } from '../utils/tools';

/**
 * Get All wilders
 */
export const find = async (req, res) => {
    try {
        await WilderModel.init();
        const results = await WilderModel.find();

        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving data from database',
            error: err.message,
        });
    }
};

/**
 * Get wilder by id
 */
export const findById = async (req, res) => {
    try {
        const { id } = req.params;

        await WilderModel.init();
        const result = await WilderModel.findById(id);

        if (!result) {
            return res.status(302).json({
                message: 'No wilder found with this id',
            });
        }

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({
            message: 'Error retrieving data from database',
            error: err.message,
        });
    }
};

/**
 * add wilder
 */
export const save = async (req, res) => {
    try {
        await WilderModel.init();
        const newWilder = WilderModel(req.body);
        const result = await newWilder.save();

        res.status(200).json({
            success: true,
            message: 'Wilder successfully saved',
            result,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error saving the wilder',
            error: listErrors(err),
        });
    }
};

/**
 * Update wilder
 */
export const update = async (req, res) => {
    try {
        await WilderModel.init();
        const { id } = req.params;
        const result = await WilderModel.updateOne({ _id: id }, req.body);

        if (result.matchedCount === 0) {
            return res.status(302).json({
                message: 'No wilder found with this id',
            });
        }

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
};

/**
 * Delete wilder
 */
export const remove = async (req, res) => {
    try {
        await WilderModel.init();
        const { id } = req.params;
        const result = await WilderModel.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
            return res.status(302).json({
                message: 'No wilder found with this id',
            });
        }

        res.status(200).json({
            message: 'Wilder deleted successfully',
            result,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Error deleting the wilder',
            error: listErrors(err),
        });
    }
};
