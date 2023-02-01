import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1E192C;
        color: white;
        font-family: 'OpenSans', sans-serif;
        font-size: 16px;
    }

    img {
        width: 100%;
    }
    
    .flex-start {
        align-items: flex-start;
    }

    .flex-center {
        align-items: center;
    }

    .flex-grow {
        flex: 1;
    }

    .flex-grow2 {
        flex: 2;
    }

    a {
        text-decoration: none;
    }
    a.warning {
        color: #E5E044;
    }

    a.success {
        color: #23DD7A;
    }

`;