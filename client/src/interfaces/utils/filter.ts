import { IWilder } from '../elements';

export type filtersWildersType = (
    datas: IWilder[],
    search: string,
    filter: string
) => IWilder[];
