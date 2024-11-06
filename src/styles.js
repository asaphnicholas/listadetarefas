import styled from "styled-components";

export const AddButton = styled.button`
  background: green;
  color: white;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  background: #140024;
  padding: 20px;
  border-radius: 10px;

  h1 {
    color: white;
  }

  input {
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
  }
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: white;
  border-radius: 5px;
  margin-top: 15px;
  padding: 0 10px;

  p {
    text-transform: capitalize;
    font-weight: bold;
    color: #140024;
  }
`;

export const TrashButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;
