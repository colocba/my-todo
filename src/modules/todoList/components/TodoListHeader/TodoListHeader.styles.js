import styled from "styled-components";

export const TodoListHeaderWrapper = styled.div`
  height: 50px;
  font-family: Verdana;
  margin-bottom: 10px;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  padding-left: 10px;
  border-radius: 6px;
  border: 1px solid lightblue;
`;

export const FilterButton = styled.div`
  border-radius: 15px;
  border: 2px solid ${props => props.color};
  text-align: center;
  cursor: pointer;
  padding: 5px 10px;
  ${props => props.isSelected && `
    background-color: ${props.color};
    color: white;
  `};
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 10px;
  }
`;
