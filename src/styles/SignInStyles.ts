import styled from "styled-components";
import sizes from "../utils/sizes";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${[sizes.up("sm")]} {
    height: 100vh;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  background: linear-gradient(
      180deg,
      rgba(9, 11, 19, 1) 0%,
      rgba(9, 11, 19, 0.1) 50%,
      rgba(9, 11, 19, 1) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/1fcbae1b-7dbe-47af-8e9b-7a8e53c14096/BR-pt-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg");

  ${[sizes.up("sm")]} {
    height: 100vh;
  }
`;

export const Heading = styled.h1`
  width: 100%;

  margin-bottom: 30px;
  color: #fff;
`;

export const Form = styled.form`
  width: 100%;
  min-height: 450px;
  height: auto;

  padding: 25px;

  display: flex;
  flex-direction: column;
  border-radius: 10px;

  background: rgba(9, 11, 19, 1);
  box-shadow: #0e0f18 0px 0px 30px 1px;

  ${[sizes.up("sm")]} {
    width: 350px;
  }
  ${[sizes.up("xl")]} {
    width: 420px;
  }
`;

export const Input = styled.input`
  height: 50px;

  padding: 5px 18px;
  margin-bottom: 24px;

  background: #333;
  color: #fff;

  font-size: 16px;
  line-height: 50px;

  outline: none;
  border: none;
  border-radius: 5px;

  ${[sizes.up("xl")]} {
    padding: 5.6px 25.2px;
    font-size: 22.4px;
    line-height: 70px;
  }
`;

export const Button = styled.button`
  padding: 16px;
  margin-bottom: 20px;

  font-size: 14px;
  font-weight: 600;

  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(171, 102, 255, 1) 0%,
    rgba(116, 182, 247, 1) 90%
  );

  cursor: pointer;
  transition: 150ms all;

  outline: none;
  border: none;
  border-radius: 5px;

  transition: 0.3s all ease-in-out;

  &:hover {
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(116, 182, 247, 1) 0%,
      rgba(171, 102, 255, 1) 90%
    );
  }
  ${[sizes.up("xl")]} {
    padding: 22.4px;
    font-size: 20.3px;
  }

  :active {
    opacity: 0.8;
    transform: scale(95%);
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;

  font-weight: 500;

  :hover {
    text-decoration: underline;
    color: #fff;
  }

  :active {
    text-decoration: underline;
    color: #fff;
  }
`;
