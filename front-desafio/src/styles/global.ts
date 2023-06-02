import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
    list-style: none;
    font-family: 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
  }

  :root{
    --primary:#20B2AA;
    --gray-100: #333333;
    --grey-50: #828282;
    --grey-20: #E0E0E0;
    --grey-0: #F5F5F5;
    --white: #FFFFFF;
  }

  
`;
