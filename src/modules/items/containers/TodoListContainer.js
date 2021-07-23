import {connect} from "react-redux";
import {getTodoListTitle} from "../../todosPanel/data/selectors";
import {addTodoItemAction, removeTodoListAction} from "../../todosPanel/data/actions";

const TodoListContainer = (props) => {
    const {removeTodoList, title, addTodoItem, children} = props;

    const childProps = {
        removeTodoList,
        title,
        addTodoItem
    };
    return <>{children(childProps)}</>
};

const mapStateToProps = (state, ownProps) => ({
    title: getTodoListTitle(state, ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeTodoList: () => dispatch(removeTodoListAction(ownProps.id)),
    addTodoItem: (text) => dispatch(addTodoItemAction(ownProps.id, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
