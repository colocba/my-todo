import {connect} from "react-redux";
import {getItemsByTodoListId} from "../data/selectors";
import {applyFilters} from "../utils";

const TodoItemsContainer = (props) => {
    const {items, toggleTodoItem, removeTodoItem, filtersObject, children} = props;
    const {isCompletedSelected, isHighPrioritySelected} = filtersObject;

    const filters = {
        priority: priority => isHighPrioritySelected && (priority === "high"),
        completed: completed => isCompletedSelected && completed
    };

    const filteredItems = applyFilters(items.items, filters, isCompletedSelected, isHighPrioritySelected);
    const childProps = {
        items: filteredItems,
        toggleTodoItem,
        removeTodoItem
    };
    return <>{children(childProps)}</>
};

const mapStateToProps = (state, ownProps) => ({
    items: getItemsByTodoListId(state, ownProps.todoId),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleTodoItem: (itemId) => dispatch({type: 'TOGGLE_TODO_ITEM', payload: {todoListId: ownProps.todoId, todoItemId: itemId}}),
    removeTodoItem: (itemId) => dispatch({type: 'REMOVE_TODO_ITEM', payload: {todoListId: ownProps.todoId, todoItemId: itemId}})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemsContainer);
