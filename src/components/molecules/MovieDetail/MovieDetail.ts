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
    );
    /* url("${(props) => props.background}"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10% 30%;

  .movie-box {
    width: 70%;
    height: 70%;

    position: fixed;

    background: rgba(9, 11, 19, 0.9);
    border-radius: 15px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .left {
      width: 40%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px 0 0 15px;
      }
    }

    .right {
      width: 60%;
      height: 100%;

      padding: 10px 25px;

      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        width: 100%;
        height: auto;

        padding: 15px;

        h1 {
          font-size: 28px;
          line-height: 45px;
        }

        button {
          margin-top: 24px;
          max-width: 250px;
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
        height: 200px;

        padding: 15px;

        overflow-y: auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          width: 100%;
          height: 100%;
          text-align: justify;
        }
      }

      .player {
        width: 100%;
        height: 100%;

        padding: 15px;

        display: block;
      }
    }

    ${[sizes.down("md")]} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 24px 30px;

      .left {
        width: 100%;
        height: 40%;

        img {
          height: 100%;
          object-fit: contain;
        }
      }

      .right {
        width: 100%;
        height: 60%;

        background: green;

        padding: 0;

        .title {
          width: 100%;
          max-height: 200px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            font-size: 18px;
            line-height: 25px;
            text-align: center;
          }

          button {
            margin-top: 24px;
            max-width: 250px;
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
            margin-top: 10px;
            width: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

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
          height: 100%;
          max-height: 150px;

          overflow-y: auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            width: 100%;
            height: 100%;
            text-align: justify;
          }
        }

        .player {
          display: none;
        }
      }
    }

    ${[sizes.down("sm")]} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 24px 30px;

      .left {
        width: 100%;
        height: 40%;

        img {
          height: 100%;
          object-fit: contain;
        }
      }

      .right {
        width: 100%;
        height: 60%;

        background: green;

        padding: 0;

        .title {
          width: 100%;
          max-height: 140px;
          height: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          h1 {
            font-size: 18px;
            line-height: 25px;
            text-align: center;
          }

          button {
            margin-top: 24px;
            max-width: 250px;
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
            display: none;
          }
        }

        .desc {
          width: 100%;
          height: 100%;
          max-height: 150px;

          overflow-y: auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          p {
            width: 100%;
            height: 100%;
            text-align: justify;
          }
        }

        .player {
          display: none;
        }
      }
    }
  }
`;
