import styled from "styled-components";
import { fadeEffect } from "styles/GlobalStyles";
import sizes from "utils/sizes";

export const Container = styled.div`
  height: 430px;

  margin: 20px 20px;

  ${[sizes.up("md")]} {
    margin: 20px 35px;
  }

  font-family: "Poppins", sans-serif;

  h2 {

    color: white;

    font-size: 16px;
    font-weight: bold;

    ${[sizes.up("md")]} {
      font-size: 20px;
    }

    transition: all ease 0.3s;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-drag: none;
  user-select: none;
  ${fadeEffect}
`;

export const CardBox = styled.div`
  width: 230px;
  height: 400px;
  max-height: 360px;
  transform: scale(0.85);
  transition: all ease 0.2s;

  box-shadow: 0px 0px 20px 10px rgba(1, 1, 1, 0.4);

  :hover {
    transform: scale(0.9);
    filter: grayscale(5%);
    cursor: pointer;
  }
`;

export const MovieRowList = styled.div`
  height: 360px;
  display: inline-flex;
`;

export const InitialSpace = styled.div<{ additionalSpace?: boolean }>`
  display: inline-flex;
  min-width: 100vw;
  ${({ additionalSpace }) =>
    additionalSpace &&
    `
    &:last-child {
      margin-right: 50px;
      ${[sizes.up('sm')]} {
        margin-right: 70px;
      }
      ${[sizes.up('md')]} {
        margin-right: 80px;
      }
      ${[sizes.up('lg')]} {
        margin-right: 90px;
      }
    }
  `}
`;

export const LoadMore = styled.div`
  position: relative;
  margin-right: 15px;
  padding-right: 29vw;
  ${[sizes.up('sm')]} {
    padding-right: 18vw;
  }
  ${[sizes.up('md')]} {
    padding-right: 15vw;
  }
  ${[sizes.up('lg')]} {
    padding-right: 11.26vw;
  }
  animation: pulse 1s infinite ease-in-out;
  @keyframes pulse {
    0% {
      background: #1c1c1c;
    }
    50% {
      background: #101010;
    }
    100% {
      background: #1c1c1c;
    }
  }
`;
