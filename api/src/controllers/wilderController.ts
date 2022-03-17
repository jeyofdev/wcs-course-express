/* eslint-disable consistent-return */
import { Request, Response } from 'express';
import WilderModel from '../models/wilderModel';
import  listErrors  from '../utils/tools';
import { IWilder } from '../interfaces/models';

/**
 * Get All wilders
 */
export const find = async (_: Request, res: Response) => {
  try {
    await WilderModel.init();
    const results: IWilder[] = await WilderModel.find();

    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving data from database',
      error: (err as Error).message,
    });
  }
};

/**
 * Get wilder by id
 */
export const findById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await WilderModel.init();
    const result: IWilder | null = await WilderModel.findById(id);

    if (!result) {
      return res.status(302).json({
        message: 'No wilder found with this id',
      });
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: 'Error retrieving data from database',
      error: (err as Error).message,
    });
  }
};

/**
 * add wilder
 */
export const save = async (req: Request, res: Response) => {
  try {
    await WilderModel.init();
    const newWilder = new WilderModel(req.body);
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
export const update = async (req: Request, res: Response) => {
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
      success: true,
      message: 'Wilder updated successfully',
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error updating the movie',
      error: (err as Error).message,
    });
  }
};

/**
 * Delete wilder
 */
export const remove = async (req: Request, res: Response) => {
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
      success: true,
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
