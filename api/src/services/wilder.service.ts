import WilderCreateInput from 'src/inputs/wilderCreate.input';
import WilderUpdateInput from 'src/inputs/wilderUpdate.input';
import { Service } from 'typedi';
import WilderModel from '../models/Wilder.model';

@Service()
class WilderService {
  find = () => WilderModel.find();

  findById = async (id: string) => {
    const wilder = await WilderModel.findById(id);
    return wilder;
  };

  save = (data: WilderCreateInput) => WilderModel.create(data);

  update = async (data: WilderUpdateInput) => {
    await WilderModel.updateOne({ _id: data.id }, data);
    return WilderModel.findById(data.id);
  };

  remove = (id: string) => WilderModel.findByIdAndDelete({ _id: id });
}

export default WilderService;
