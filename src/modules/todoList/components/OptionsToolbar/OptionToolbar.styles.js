import styled from "styled-components";
import {TodoListWrapper} from "../TodoList/TodoList.styled";

export const ToolbarWrapper = styled.div`
  position: fixed;
  z-index: 2;
  background-color: #f8f8f8f8;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  width: 40px;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s;
  ${TodoListWrapper}:hover & {
    opacity: 1;
  }
`;

export const ToolbarOption = styled.div`
  cursor: pointer;
`;
