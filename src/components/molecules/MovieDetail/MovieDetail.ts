import styled from "styled-components";
import { fadeEffect } from "styles/GlobalStyles";
import sizes from "utils/sizes";

interface ImgProp {
  background: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.div<ImgProp>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
      180deg,
      rgba(9, 11, 19, 1) 0%,
      rgba(9, 11, 19, 0.4) 50%,
      rgba(9, 11, 19, 1) 100%
    ),
    url("${(props) => props.background && `${props.background}`}");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10% 30%;

  .movie-box {
    width: 80%;
    height: 80%;

    position: fixed;

    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background: rgba(9, 11, 19, 0.9);
    border-radius: 15px;

    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: auto;
        height: 150px;
      }

      .title {
        width: 100%;
        height: 180px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 14px;
        }

        button {
          max-width: 400px;
          width: 100%;
          height: 50px;

          margin-top: 21px;

          border-radius: 5px;

          font-size: 18px;
          font-weight: 500;

          transition: 0.3s all ease-in-out;

          background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(171, 102, 255, 1) 0%,
            rgba(116, 182, 247, 1) 90%
          );

          :hover {
            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(116, 182, 247, 1) 0%,
              rgba(171, 102, 255, 1) 90%
            );
          }

          :active {
            opacity: 0.7;
            transform: scale(85%);
          }
        }

        .rate-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;

          .rate {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          span {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            font-weight: 800;
            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(171, 102, 255, 1) 0%,
              rgba(116, 182, 247, 1) 90%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }

      .desc {
        width: 100%;
        height: 250px;

        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          margin-top: 15px;
          width: 100%;
          height: 170px;
          text-align: justify;
          overflow-y: auto;
        }
      }
    }

    .bot {
      display: none;
    }

    ${[sizes.up("sm")]} {
      .top {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: auto;
          height: 350px;
        }

        .title {
          width: 100%;
          height: 180px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            font-size: 20px;
          }

          button {
            max-width: 400px;
            width: 100%;
            height: 50px;

            margin-top: 21px;

            border-radius: 5px;

            font-size: 18px;
            font-weight: 500;

            transition: 0.3s all ease-in-out;

            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(171, 102, 255, 1) 0%,
              rgba(116, 182, 247, 1) 90%
            );

            :hover {
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(116, 182, 247, 1) 0%,
                rgba(171, 102, 255, 1) 90%
              );
            }

            :active {
              opacity: 0.7;
              transform: scale(85%);
            }
          }

          .rate-box {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .rate {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            }

            span {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              font-weight: 800;
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(171, 102, 255, 1) 0%,
                rgba(116, 182, 247, 1) 90%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .desc {
          width: 100%;
          height: 160px;

          display: flex;
          flex-direction: column;
          align-items: center;
          p {
            margin-top: 24px;
            width: 100%;
            height: 170px;
            text-align: justify;
            overflow-y: auto;
          }
        }
      }

      .bot {
        width: 100%;
        height: 100%;
        display: flex;

        .trailer {
          width: 100%;
          height: 100%;

          padding: 25px;

          background: red;
        }
      }
    }

    ${[sizes.up("lg")]} {
      width: 70%;
      height: 70%;
      flex-direction: column;
      align-items: flex-start;

      .top {
        max-width: 100%;
        display: flex;
        flex-direction: row;

        img {
          height: 250px;
          margin: 0 24px;
        }

        .title {
          max-width: 400px;
          width: auto;
          height: 250px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            width: 400px;
            font-size: 18px;

            text-align: center;
          }

          button {
            max-width: 400px;
            width: 100%;
            height: 50px;

            border-radius: 5px;

            font-size: 18px;
            font-weight: 500;

            transition: 0.3s all ease-in-out;

            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(171, 102, 255, 1) 0%,
              rgba(116, 182, 247, 1) 90%
            );

            :hover {
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(116, 182, 247, 1) 0%,
                rgba(171, 102, 255, 1) 90%
              );
            }

            :active {
              opacity: 0.7;
              transform: scale(85%);
            }
          }

          .rate-box {
            width: 400px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            .rate {
              width: auto;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            }

            span {
              font-weight: 800;
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(171, 102, 255, 1) 0%,
                rgba(116, 182, 247, 1) 90%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }

        .desc {
          width: 100%;
          height: 250px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          p {
            width: 100%;
            height: 170px;
            text-align: justify;
            overflow-y: auto;

            padding: 25px;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .bot {
        width: 100%;
        height: 100%;
        display: flex;

        padding: 25px;
        .trailer {
          width: 100%;
          height: 100%;

          background: red;
        }
      }
    }
  }
`;
