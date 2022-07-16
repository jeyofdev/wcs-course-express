import WilderCreateInput from '../inputs/wilderCreate.input';
import WilderUpdateInput from '../inputs/wilderUpdate.input';
import { Service } from 'typedi';
import WilderModel from '../models/Wilder.model';

@Service()
class WilderService {
  // find all wilders
  find = () => WilderModel.find({ relations: ['skills'] });

  // // Find wilder by id
  findById = async (id: string) => {
    const wilder = await WilderModel.findOne({ id }, { relations: ['skills'] });

    if (!wilder) {
      throw new Error(`No wilder found with id ${id}.`);
    }

    return wilder;
  };

  // post new wilder
  save = async (data: WilderCreateInput) => {
    const wilder = new WilderModel();

    wilder.name = data?.name;
    wilder.city = data?.city;

    await wilder.save();

    return WilderModel.findOne({ id: wilder.id }, { relations: ['skills'] });
  };

  // update wilder
  update = async (data: WilderUpdateInput) => {
    const wilder = await WilderModel.findOne({ id: data?.id });

    if (!wilder) {
      throw new Error(`No wilder found with id ${data?.id}.`);
    }

    await WilderModel.update(wilder, { name: data?.name, city: data?.city });

    const updatedWilder = await WilderModel.findOne(
      { id: data?.id },
      { relations: ['skills'] }
    );

    return updatedWilder;
  };

  // delete wilder
  remove = async (id: string) => {
    const wilder = await WilderModel.findOne({ id }, { relations: ['skills'] });

    if (!wilder) {
      throw new Error(`No wilder found with id ${id}.`);
    }

    await WilderModel.remove(wilder);

    return { ...wilder, id };
  };
}

export default WilderService;
