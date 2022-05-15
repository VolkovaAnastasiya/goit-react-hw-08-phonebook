import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  margin: 30px 0;
  margin-left: 40px;
  background-color: #decee0;
`;

export const Label = styled.label`
  display: flex;
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 1px 1px 2px #4d0c03;
`;

export const Input = styled.input`
  width: 480px;
  height: 40px;
  padding: 10px 30px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #000;
  font-size: 20px;
  
  &::placeholder {
    font: inherit;
    font-size: 20px;
  }
`;
