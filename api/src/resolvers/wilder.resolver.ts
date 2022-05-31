import { Resolver, Query, Mutation, Arg, Args } from 'type-graphql';
import * as wilderService from '../services/wilder.service';
import WilderCreateInput from '../inputs/WilderCreate.input';
import WilderUpdateInput from '../inputs/WilderUpdate.input';
import wilderModel, { Wilder } from '../models/Wilder.model';

@Resolver(() => Wilder)
class WilderResolver {
  // Get all wilders
  @Query(() => [Wilder], {
    nullable: false,
    description: 'Get all wilders.',
  })
  async wilders() {
    return wilderModel.find();
  }

  // Get wilder by id
  @Query(() => Wilder, {
    nullable: true,
    description: 'Get wilder by id.',
  })
  async wilder(@Arg('wilderId') wilderId: string) {
    return wilderService.getById(wilderId);
  }

  // Post wilder
  @Mutation(() => Wilder, { description: 'Add new wilder.' })
  async postWilder(@Args() { name, city, skills }: WilderCreateInput) {
    return wilderService.save({ name, city, skills });
  }

  // Update wilder
  @Mutation(() => Wilder, { description: 'Update wilder.' })
  async updateWilder(@Args() { id, name, city, skills }: WilderUpdateInput) {
    return wilderService.update({ id, name, city, skills });
  }

  // Delete wilder
  @Mutation(() => Wilder, { description: 'Delete wilder.' })
  async removeWilder(@Arg('wilderId') wilderId: string) {
    return wilderService.remove(wilderId);
  }
}

export default WilderResolver;
