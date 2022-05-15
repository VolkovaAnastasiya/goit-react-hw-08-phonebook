import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 40px;
  background-color: #decee0;
`;

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 90px;
  padding: 20px 40px;
  border: 0;
  border-radius: 5px;
  background-color: #d089da;
`;

export const Label = styled.label`
  display: inline-flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  border: 0;
  color: #3e1268;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 400px;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px 20px;
  outline: none;
  border: 0;
  font-size: 20px;
`;

export const InputBottom = styled(Input)`
  margin-bottom: 40px;
`;

export const Image = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-top: 40px;
`;
