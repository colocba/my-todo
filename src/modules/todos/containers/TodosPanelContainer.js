import { connect } from "react-redux"
import { getLists } from "../data/selectors";

const TodosPanelContainer = ({lists, children}) => {
    const childProps = {
        lists
    };

    return <>{children(childProps)}</>
}

const mapStateToProps = (state) => ({
    lists: getLists(state)
})

export default connect(mapStateToProps)(TodosPanelContainer)