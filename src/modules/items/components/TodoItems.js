import {TodoItem} from "../../todoList/components/Todo/TodoItem";
import TodoItemsContainer from "../containers/TodoItemsContainer";

export const TodoItems = (props) => {
    const {isColumnView} = props;
    return <TodoItemsContainer {...props}>
                {({items, toggleTodoItem, removeTodoItem}) => {
                    return <>
                        {items.map((item, index) => {
                            return <TodoItem key={index} {...item} toggleTodoItem={toggleTodoItem} removeTodoItem={removeTodoItem} isColumnView={isColumnView}/>
                        })}
                    </>
                }}
            </TodoItemsContainer>
};
