import WilderCreateInput from 'src/inputs/WilderCreate.input';
import WilderUpdateInput from 'src/inputs/WilderUpdate.input';
import WilderModel from '../models/Wilder.model';

export const getAll = () => WilderModel.find();

export const getById = async (id: string) => {
  const wilder = await WilderModel.findById(id);
  return wilder;
};

export const save = (data: WilderCreateInput) => WilderModel.create(data);

export const update = async (data: WilderUpdateInput) => {
  await WilderModel.updateOne({ _id: data.id }, data);
  return WilderModel.findById(data.id);
};

export const remove = async (id: string) =>
  WilderModel.findByIdAndDelete({ _id: id });
