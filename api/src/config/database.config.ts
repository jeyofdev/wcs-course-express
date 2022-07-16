import { createConnection } from 'typeorm';
import Skill from '../models/skill.model';
import Wilder from '../models/Wilder.model';

/**
 * Connextion to database
 */
const databaseConnection = async (
  url: string,
  success: string,
  logging: boolean = false
) => {
  await createConnection({
    type: 'postgres',
    url,
    entities: [Wilder, Skill],
    synchronize: true,
    logging,
  });

  console.log(success);
};

export default databaseConnection;
