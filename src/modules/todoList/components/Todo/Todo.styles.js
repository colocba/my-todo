import styled from 'styled-components';

export const TodoWrapper = styled.div`
  display: flex;
  padding: 5px 5px 5px 8px;
  justify-content: space-between;
  background-color: #f8f8f8f8;
  border-radius: 6px;
  margin-bottom: 10px;
  min-height: 50px;
  align-items: ${props => props.isColumnView ? 'center' : 'start'};
  border-left: 4px solid ${props => props.borderColor};
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.5s;
`;

export const TodoTitle = styled.div`
  font-family: Verdana;
  font-size: 16px;
  width: 90%;
  margin-left: 10px;
`;
