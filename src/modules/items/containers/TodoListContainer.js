import {connect} from "react-redux";
import {getTodoListTitle} from "../../todosPanel/data/selectors";

const TodoListContainer = (props) => {
    const {removeTodoList, title, children} = props;

    const childProps = {
        removeTodoList,
        title,
    };
    return <>{children(childProps)}</>
};

const mapStateToProps = (state, ownProps) => ({
    title: getTodoListTitle(state, ownProps.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    removeTodoList: () => dispatch({type: 'REMOVE_TODO', payload: ownProps.id})
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
