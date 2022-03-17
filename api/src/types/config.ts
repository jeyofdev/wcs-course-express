import { IdatabaseConnectOptions } from '../interfaces/config';

export type ConnectDatabaseType = (
  url: string,
  dbConnectOptions: IdatabaseConnectOptions
) => void;
