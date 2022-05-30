import { Resolver, Query } from 'type-graphql';
import wilderModel, { Wilder } from '../models/Wilder.model';

@Resolver(() => Wilder)
class WilderResolver {
  // Get all wilders
  @Query(() => [Wilder], {
    nullable: true,
    description: 'Get all wilders.',
  })
  async wilders() {
    return wilderModel.find();
  }
}

export default WilderResolver;
