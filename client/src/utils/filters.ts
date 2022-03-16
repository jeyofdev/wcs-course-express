import { IWilder } from '../interfaces/elements';
import { filtersWildersType } from '../interfaces/utils/filter';

/**
 * Filter wilders by search and filter
 */
export const filtersWilders: filtersWildersType = (datas, search, filter) => {
    return datas
        .filter((wilder: IWilder) =>
            wilder.name
                .slice(0, search.length)
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .filter((wilderFiltered: IWilder) =>
            filter === 'all'
                ? wilderFiltered
                : wilderFiltered.city
                      .toLowerCase()
                      .includes(filter.toLowerCase())
        );
};
