import styled from "styled-components";

interface NavBarType {
  black: boolean;
}

export const NavBar = styled.nav<NavBarType>`
  width: 100%;
  height: 80px;

  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 22px;

  position: fixed;

  transition: all 0.5s ease;

  background: ${(props) =>
    props.black
      ? `linear-gradient(
      180deg,
      rgba(9, 11, 19, 1) 0%,
      transparent 50%,
      transparent 100%
    )`
      : "transparent"};

  .left-container {
    img {
      width: 150px;
      height: 100%;

      :hover {
        cursor: pointer;
      }
    }
  }

  .right-container {
    button {
      width: 100px;
      height: 40px;

      outline: none;
      border: none;
      border-radius: 3px;

      background: #4e4a59;

      transition: all 0.2s ease;

      font-weight: 500;
      font-size: 15px;

      :hover {
        background: #302d36;
      }

      :active {
        background: #302d36;
        transform: scale(90%);
      }
    }
  }
`;
