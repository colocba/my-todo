import {FilterButton, FilterButtonsWrapper, TodoListHeaderWrapper} from "./TodoListHeader.styles";

export const TodoListHeader = ({title, filtersObject}) => {
    const {isCompletedSelected, isHighPrioritySelected, setIsCompletedSelected, setIsHighPrioritySelected} = filtersObject;

    return <TodoListHeaderWrapper>
        {title}
        <FilterButtonsWrapper>
            <FilterButton color={'green'} isSelected={isCompletedSelected} onClick={() => setIsCompletedSelected(!isCompletedSelected)}>
                Completed
            </FilterButton>
            <FilterButton color={'red'} isSelected={isHighPrioritySelected} onClick={() => setIsHighPrioritySelected(!isHighPrioritySelected)}>
                High priority
            </FilterButton>
        </FilterButtonsWrapper>
    </TodoListHeaderWrapper>
};
