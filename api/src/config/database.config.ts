import { createConnection } from 'typeorm';
import Skill from '../models/skill.model';
import Wilder from '../models/Wilder.model';

/**
 * Connextion to database
 */
const databaseConnection = async (
  url: string,
  logging: boolean = false
) => {
  await createConnection({
    type: 'postgres',
    url,
    entities: [Wilder, Skill],
    synchronize: true,
    logging,
  });
};

export default databaseConnection;
