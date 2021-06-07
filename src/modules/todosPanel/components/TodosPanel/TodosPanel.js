import TodosPanelContainer from "../../containers/TodosPanelContainer";
import { TodoList } from "../../../todoList/components/TodoList/TodoList";
import { TodosPanelWrapper } from "./TodosPanel.styles";

const TodosPanel = () => {
    return <TodosPanelContainer>
                {({todos}) => {
                    return <TodosPanelWrapper>
                                {Object.values(todos).map(todoList => {
                                    return <TodoList {...todoList}/>
                                })}
                            </TodosPanelWrapper>
                }}
            </TodosPanelContainer>
};

export default TodosPanel;
