import styled from "styled-components";

export const ContainerFormRegister = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;

  form {
    width: 383px;
    border: solid 1px var(--grey-0);
    padding: 0.7rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 100%;
    justify-content: space-around;
  }

  input {
    height: 55px;
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid var(--grey-50);
    padding: 0px 13px 0px 13px;
  }

  button {
    height: 55px;
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid var(--grey-50);
    padding: 0px 13px 0px 13px;
    background-color: var(--primary);
    color: var(--white);
    font-size: 16px;
  }
`;
