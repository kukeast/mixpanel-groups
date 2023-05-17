import { createGlobalStyle, css } from "styled-components";

export const EditorGlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css");
        *{
            transition: background-color 0.2s, border 0.2s;
        }
        body{
            /* background-color: ${theme.background}; */
            font-family: 'Pretendard', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }
        p{
            margin: 0;
        }
        input, textarea, select { 
            font-family:inherit;
        }
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    `}
`