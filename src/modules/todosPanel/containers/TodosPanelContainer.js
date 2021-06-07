import { connect } from "react-redux"
import { getLists } from "../data/selectors";

const TodosPanelContainer = ({todos, children}) => {
    const childProps = {
        todos
    };

    return <>{children(childProps)}</>
}

const mapStateToProps = (state) => ({
    todos: getLists(state)
});

export default connect(mapStateToProps)(TodosPanelContainer)
