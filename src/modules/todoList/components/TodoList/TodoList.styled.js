import styled from 'styled-components';

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.09);
  position: relative;
  z-index: 1;
`;

export const ItemsWrapper = styled.div`
    ${props => !props.isColumnView && `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        row-gap: 10px;
        column-gap: 10px;
    `};
    ${props => props.isColumnView && `
        display: flex;
        flex-direction: column;  
    `};
    flex: 1;
    overflow: scroll;
`;
