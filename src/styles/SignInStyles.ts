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

  display: flex;
  flex-direction: column;
  border-radius: 4px;

  ${[sizes.up("sm")]} {
    width: 300px;
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

  font-size: 14.5px;
  font-weight: bold;

  background: #e50914;

  cursor: pointer;
  transition: 150ms all;

  outline: none;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #c40812;
  }
  ${[sizes.up("xl")]} {
    padding: 22.4px;
    font-size: 20.3px;
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
