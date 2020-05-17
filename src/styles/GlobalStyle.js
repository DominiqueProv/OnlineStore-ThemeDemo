import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
}

body {
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
       --PrimaryColor: #CEB9FF;
       
}

`

export default GlobalStyle;