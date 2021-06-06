import TodosPanelContainer from "../../containers/TodosPanelContainer";
import { TodoList } from "../TodoList/TodoList";
import { TodosPanelWrapper } from "./TodosPanel.styles";

const TodosPanel = () => {
    return <TodosPanelContainer>
        {({lists}) => {
            return <TodosPanelWrapper>
                        {lists.map(todoList => {
                            return <TodoList items={todoList}/>
                        })}
                    </TodosPanelWrapper>
        }}
    </TodosPanelContainer>
}

export default TodosPanel;