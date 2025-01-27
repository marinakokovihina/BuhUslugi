import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    font-family: "Raleway";
    background: ${theme.colors.bg};
    color: ${theme.colors.fontPrimary};
    overflow-x: hidden;

  }

  svg {
  }

  .animate__animated {
    -webkit-animation-duration: 1s;
  }

  .animate__fadeInRight {
    -webkit-animation-name: fadeInRight;
  }

  .animate__fadeInLeft {
    -webkit-animation-name: fadeInLeft;
  }

  .animate__fadeInUp {
    -webkit-animation-name: fadeInUp;
  }

  .animate__fadeInUp {
    -webkit-animation-name: fadeInDown;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`
