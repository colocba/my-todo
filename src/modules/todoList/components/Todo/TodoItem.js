import {TodoTitle, TodoWrapper} from "./Todo.styles";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {Icon} from "../../../common/components/Icon/Icon";
import {getBorderColorByPriority} from "./utils";

export const TodoItem = ({title, completed, priority, toggleTodoItem, id, isColumnView, removeTodoItem}) => {
    const iconColor = completed ? 'green' : '#ffffff';
    const borderColor = getBorderColorByPriority(priority);

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        removeTodoItem(id);
    };

    return <TodoWrapper borderColor={borderColor} onClick={() => toggleTodoItem(id)} isColumnView={isColumnView}>
                <Icon icon={faCheckCircle} color={iconColor} size={'20px'}/>
                <TodoTitle>{title}</TodoTitle>
                <div onClick={handleRemoveClick}>
                    <Icon icon={faTimesCircle} color={'black'} size={'20px'}/>
                </div>
            </TodoWrapper>
};
