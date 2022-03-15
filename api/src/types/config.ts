import { IdatabaseConnectOptions } from '../interfaces/config';

export type connectDatabaseType = (
    url: string,
    dbConnectOptions: IdatabaseConnectOptions
) => void;
