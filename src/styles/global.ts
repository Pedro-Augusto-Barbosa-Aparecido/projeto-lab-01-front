import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 7px;
      background-color: ${(props) => props.theme["gray-500"]};
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme["gray-700"]};
      border-radius: 8px;
    }
      
    body {
      background: ${(props) => props.theme["gray-600"]};
      color: ${(props) => props.theme["gray-300"]};
      -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
`;
