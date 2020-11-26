import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-user-select: none;
        -moz-user-select: -moz-none;
        -ms-user-select: none;
        user-select: none;

    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        font-family: 'Roboto', sans-serif;
        font-size: 100;
        border: 0;
        outline: 0;
    }

    :root {
        --primary: #191622;
        --secondary: #221D30;
        --green: #33FB88;
        --red: #E34153;
        --yellow: #F6AE73;
        --blud: #5A9CAA;
        --orange: #B2B675;
        --purple: #614D7C;
        --border: #524263;
    }
`;