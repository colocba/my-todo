// export const getFilteredItems = (itemsToFilter, isCompletedSelected, isHighPrioritySelected) => {
//     const {items} = itemsToFilter;
//     if (!isCompletedSelected && !isHighPrioritySelected) {
//         return items;
//     }
//     return items.filter(item => item.completed === isCompletedSelected || (item.priority === "HIGH" && isHighPrioritySelected));
// };

export const applyFilters = (array, filters, isCompletedSelected, isHighPrioritySelected) => {
    if (!isCompletedSelected && !isHighPrioritySelected) {
        return array;
    }
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        // validates all filter criteria
        return filterKeys.some(key => {
            // ignores non-function predicates
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        });
    });
};
