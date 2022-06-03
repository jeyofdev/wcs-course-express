import WilderCreateInput from 'src/inputs/wilderCreate.input';
import WilderUpdateInput from 'src/inputs/wilderUpdate.input';
import { Service } from 'typedi';
import WilderModel from '../models/Wilder.model';

@Service()
class WilderService {
  // find all wilders
  find = () => WilderModel.find();

  // Find wilder by id
  findById = async (id: string) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error(`The id ${id} is not in objectId format valid.`);
    }

    const wilder = await WilderModel.findById(id);

    if (!wilder) {
      throw new Error(`No wilder found with id ${id}.`);
    }
    return wilder;
  };

  save = (data: WilderCreateInput) => WilderModel.create(data);

  // update wilder
  update = async (data: WilderUpdateInput) => {
    if (!data?.id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error(`The id ${data?.id} is not in objectId format.`);
    }

    const wilder = await WilderModel.findById(data?.id);
    if (!wilder) {
      throw new Error(`No wilder found with id ${data?.id}.`);
    }

    await WilderModel.updateOne({ _id: data?.id }, data);

    return WilderModel.findById(data?.id);
  };

  // delete wilder
  remove = async (id: string) => {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error(`The id ${id} is not in objectId format.`);
    }

    const wilder = await WilderModel.findById(id);
    if (!wilder) {
      throw new Error(`No wilder found with id ${id}.`);
    }

    return WilderModel.findByIdAndDelete({ _id: id });
  };
}

export default WilderService;
