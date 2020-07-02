import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
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
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    font-family: "Roboto", sans-serif;
  }

  /* classes internas do slider */
  .slides {
    /* .slide {
      position: relative;
    } */
    .slick-slider {
      overflow: hidden!important;
    }
    .slick-dots {
      /* position: static!important; */
      bottom: 25px!important;
    }
    .slick-prev {
      left: 3% !important;
      z-index: 1;
    }
    .slick-next {
      right: 3% !important;
      z-index: 1;
    }
    li.slick-active div {
      background-color: #B4A734!important;
    } 
  }

  /* coloca borda em todos os elementos para ajudar a procurar o scroll horizontal */
  /* * {
    outline: 1px solid red; 
  } */

  /* :root {
    font-size: calc(1vw + 1vh + .5vmin);
  }
  body {
    font: 1rem/1.6 sans-serif;
  } */
`

export default GlobalStyles
