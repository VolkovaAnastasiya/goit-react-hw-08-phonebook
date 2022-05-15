import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 40px;
  background-color: #decee0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: start;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 480px;
  height: 50px;
  margin: 0;
  margin-bottom: 10px;
  border: 0;
  border-radius: 3px;
  background-color: #cb76d6;
  transition: all 400ms cubic-bezier(0.4, 0, 0.3, 1);

  &:hover {
    box-shadow: 5px 4px 5px 1px rgba(100, 100, 100, 0.7);
  }
`;

export const Text = styled.p`
  margin-right: 10px;
  color: #550c5f;
  font-size: 18px;
  font-weight: 600;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ChangeColor = styled.span`
  color: #550c5f;
  transition: color 400ms cubic-bezier(0.4, 0, 0.3, 1);

  &:hover {
    color: #ffffff70;
  }
`;
