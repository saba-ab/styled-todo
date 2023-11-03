import styled from "styled-components";

export const TaskList = styled.div`
  width: 537px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DateFrom = styled.div`
  background-color: ;
  color: #80848a;
  margin-left: auto;
  display: none;
  padding: 0 30px;
`;
export const Task = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  background: #fff;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  position: relative;

  &:hover ${DateFrom} {
    display: block;
  }
`;

export const Remove = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 4px;
  border: 2px solid ${(props) => props.color};
  cursor: pointer;
  position: absolute;
  right: 10px;
`;
export const Check = styled.div`
  width: 19px;
  height: 19px;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
`;
export const TodoText = styled.p`
  font-size: 18px;
`;
