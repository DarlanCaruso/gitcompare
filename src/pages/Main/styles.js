import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7%;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input,
  button {
    border: 0;
    padding: 0 20px;
  }

  input {
    flex: 1;
    height: 45px;
    font-size: 14px;
    background: white;
    color: #444;
    border-radius: 3px 0 0 3px;
  }

  button {
    font-weight: bold;
    font-size: 18px;
    background: #706fd3;
    color: white;
    border-radius: 0 3px 3px 0;
    cursor: pointer;

    &:hover {
      background: #474787;
    }
  }
`;
