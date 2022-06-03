import { WilderType } from '../types';

/**
 * Filter wilders by search and filter
 */
export const filtersWilders = (
    datas: WilderType[],
    search: string,
    filter: string
) => {
    return datas
        .filter((wilder: WilderType) =>
            wilder.name
                .slice(0, search.length)
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .filter((wilderFiltered: any) =>
            filter === 'all'
                ? wilderFiltered
                : wilderFiltered.city
                      .toLowerCase()
                      .includes(filter.toLowerCase())
        );
};
