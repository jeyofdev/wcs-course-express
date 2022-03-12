/**
 * Filter wilders by search and filter
 */
export const filtersWilders = (datas, search, filter) => {
    return datas
        .filter((wilder) =>
            wilder.name
                .slice(0, search.length)
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .filter((wilderFiltered) =>
            filter === 'all'
                ? wilderFiltered
                : wilderFiltered.city
                      .toLowerCase()
                      .includes(filter.toLowerCase())
        );
};
