import { GraphQLScalarType, Kind } from 'graphql';
import { ObjectId } from 'mongodb';

const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'Type scalair pour un ObjectId de Mongo',
  parseValue(value: string) {
    return new ObjectId(value);
  },
  serialize(value: ObjectId) {
    return value.toHexString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value);
    }
    return null;
  },
});

export default ObjectIdScalar;
