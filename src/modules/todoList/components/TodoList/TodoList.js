import {ItemsWrapper, TodoListWrapper} from "./TodoList.styled"
import {useState} from "react";
import {OptionsToolbar} from "../OptionsToolbar/OptionsToolbar";
import TodoListContainer from "../../../items/containers/TodoListContainer";
import {TodoListHeader} from "../TodoListHeader/TodoListHeader";
import {TodoItems} from "../../../items/components/TodoItems";
import React from 'react';

const TodoList = (props) => {
    const [isColumnView, setIsColumnView] = useState(true);
    const toggleColumnView = () => {
        if (isColumnView) {
            setIsColumnView(false);
        } else {
            setIsColumnView(true);
        }
    };

    const [isCompletedSelected, setIsCompletedSelected] = useState(false);
    const [isHighPrioritySelected, setIsHighPrioritySelected] = useState(false);
    const filtersObject = {
        isCompletedSelected,
        setIsCompletedSelected,
        isHighPrioritySelected,
        setIsHighPrioritySelected
    };

    return <TodoListWrapper>
                <TodoListContainer {...props}>
                    {({removeTodoList, title, addTodoItem}) => {
                        return <>
                                    <TodoListHeader title={title} filtersObject={filtersObject}/>
                                    <ItemsWrapper isColumnView={isColumnView}>
                                        <TodoItems todoId={props.id} filtersObject={filtersObject} isColumnView={isColumnView}/>
                                    </ItemsWrapper>
                                    <OptionsToolbar toggleColumnView={toggleColumnView} isColumnView={isColumnView} removeTodoList={removeTodoList} addItem={addTodoItem}/>
                                </>
                    }}
                </TodoListContainer>
            </TodoListWrapper>
};

export default React.memo(TodoList);
