import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "825px" };

export default createGlobalStyle`
    :root {
    --background-color: ${props => props.darkMode ?  "#181818" : "#f2f2f2"};
    --contrast-color: ${props => props.darkMode ?  "white" : "black"};
    --secondary-contrast: ${props => props.darkMode ?  "#b3b3b3" : "black"};
    --dark-mode-button: ${props => props.darkMode ?  "black" : "#b3b3b3"};
    --main-blue: #0460D9;
    --second-blue: #117CD9;
    --main-green: #274001;
    --second-green: #A2A685;
    --main-font: 'Fira Code', monospace;
    --second-font: 'Fira Sans', sans-serif;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    h1, h2, h3 {
      font-family: var(--second-font);
    }
    h1 {
        font-size: 50px;
        font-weight: 900;
        color: var(--contrast-color);
    }
    h2 {
        font-size: 25px;
        font-weight: 900;
        color: var(--contrast-color);
    }
    h3 {
        font-size: 30px;
        font-weight: 900;
        color: var(--contrast-color);
    }
    h4 {
        font-family: var(--main-font);
        font-size: 22px;
        color: var(--secondary-contrast);
    }
    body {
        background-color: var(--background-color);
    }
    p {
        font-family: var(--main-font);
        font-size: 20px;
        color: var(--secondary-contrast);
    }
`;