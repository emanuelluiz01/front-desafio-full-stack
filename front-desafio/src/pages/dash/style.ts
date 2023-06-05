import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 800px;
  min-height: 100%;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  button {
    background-color: var(--primary);
    width: 70px;
    border-radius: 7px;
    height: 30px;
    font-size: 14px;
    color: var(--white);
  }

  li {
    width: 700px;
    padding: 10px;
    margin-top: 10px;
    border: 1px solid var(--primary);
    border-radius: 10px;
  }

  h2 {
    margin: 3rem 0rem;
  }
`;
