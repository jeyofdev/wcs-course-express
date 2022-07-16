import { Resolver, Query, Mutation, Args, Arg } from 'type-graphql';
import { Service } from 'typedi';
import WilderService from '../services/wilder.service';
import WilderCreateInput from '../inputs/wilderCreate.input';
import WilderUpdateInput from '../inputs/wilderUpdate.input';
import { Wilder } from '../models/Wilder.model';

@Service()
@Resolver(() => Wilder)
class WilderResolver {
  constructor(private readonly wilderService: WilderService) {}

  // Get all wilders
  @Query(() => [Wilder], {
    nullable: false,
    description: 'Get all wilders.',
  })
  async wilders() {
    return this.wilderService.find();
  }

  // Get wilder by id
  @Query(() => Wilder, {
    nullable: true,
    description: 'Get wilder by id.',
  })
  async wilder(@Arg('wilderId') wilderId: string) {
    return this.wilderService.findById(wilderId);
  }

  // Post wilder
  @Mutation(() => Wilder, { description: 'Add new wilder.' })
  async postWilder(@Args() { name, city, skills }: WilderCreateInput) {
    return this.wilderService.save({ name, city, skills });
  }

  // Update wilder
  @Mutation(() => Wilder, { description: 'Update wilder.' })
  async updateWilder(@Args() { id, name, city, skills }: WilderUpdateInput) {
    return this.wilderService.update({ id, name, city, skills });
  }

  // Delete wilder
  @Mutation(() => Wilder, { description: 'Delete wilder.' })
  async removeWilder(@Arg('wilderId') wilderId: string) {
    return this.wilderService.remove(wilderId);
  }
}

export default WilderResolver;
