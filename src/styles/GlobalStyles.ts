import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #161616;
    color: #fff;
  }
`;

export const fadeEffect = css<{ fade: boolean }>`
  ${({ fade }) =>
    fade
      ? `
    animation: fadein 0.5s;
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `
      : `
      visibility: hidden;
    `}
`;

export const background = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
  filter: brightness(70%);
  ${fadeEffect}
`;
