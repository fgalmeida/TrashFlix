import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 22px;

  position: fixed;

  transition: all 0.5s ease;

  .left-container {
    img {
      width: 150px;
      height: 100%;
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
        transform: scale(90%)
      }
    }
  }
`;
