import {connect} from "react-redux";
import {getItemsByTodoListId} from "../data/selectors";
import {applyFilters} from "../utils";
import {removeTodoItem, toggleTodoItemActions} from "../data/actions";

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
    toggleTodoItem: (itemId) => dispatch(toggleTodoItemActions(ownProps.todoId, itemId)),
    removeTodoItem: (itemId) => dispatch(removeTodoItem(ownProps.todoId, itemId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemsContainer);
