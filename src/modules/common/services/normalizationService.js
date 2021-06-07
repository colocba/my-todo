export const getNormalizedData = (data) => {
    const {lists} = data;
    const todos = lists.reduce((acc, todo) => {
        return {
            ...acc,
            [todo.id]: {
                id: todo.id,
                title: todo.title,
                itemsIds: todo.items.map(item => item.id)
            }
        }
    }, {});
    let itemsObject = {};
    lists.forEach(todo => {
        const {id, items} = todo;
        itemsObject = {
            ...itemsObject,
           [id]: {
               items
           }
        }
    });
    return {
        todos,
        items: itemsObject
    };
}
