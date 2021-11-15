import styled from "styled-components";
import sizes from "utils/sizes";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #090b13;

  .topBtn {
    width: 40px;
    height: 40px;

    position: fixed;
    right: 20px;
    bottom: 20px;

    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(171, 102, 255, 1) 0%,
      rgba(116, 182, 247, 1) 90%
    );
    border-radius: 100%;
  }

  .hero {
    width: 100%;
    height: 560px;

    ${[sizes.up("sm")]} {
      height: 900px;
    }

    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(9, 11, 19, 0.1) 0%,
        rgba(9, 11, 19, 0.4) 50%,
        rgba(9, 11, 19, 1) 100%
      ),
      url("https://assets.nflxext.com/ffe/siteui/vlv3/5dd45df7-33f1-4274-97ea-e9c6aca69dad/1fcbae1b-7dbe-47af-8e9b-7a8e53c14096/BR-pt-20211108-popsignuptwoweeks-perspective_alpha_website_large.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    img {
      width: 300px;

      margin-bottom: 40px;
    }

    button {
      max-width: 400px;
      width: 100%;
      height: 50px;

      margin-bottom: 30px;

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
  }

  .cards {
    width: 100%;
    height: auto;

    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .arrow {
      cursor: pointer;

      ${[sizes.up("md")]} {
        margin-top: 30px;
      }

      a {
        color: #fff;
      }
    }

    .title-cards {
      h1 {
        font-size: 28px;

        ${[sizes.up("md")]} {
          margin-top: 100px;
          font-size: 42px;
        }
      }
    }

    .cards-wrap {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${[sizes.up("md")]} {
        gap: 5rem;
        flex-direction: row;
      }

      .card {
        margin-top: 50px;

        max-width: 350px;
        width: 100%;
        height: 450px;

        background: #090b13;
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-shadow: #0e0f18 0px 0px 15px 5px;

        padding: 15px 25px;

        border: 2px solid #13151d;

        .card-top {
          h1 {
            font-size: 20px;
          }

          h2 {
            width: 100%;
            margin-top: 20px;
            text-align: center;
            font-size: 28px;

            background: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(171, 102, 255, 1) 0%,
              rgba(116, 182, 247, 1) 90%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p {
            margin-top: 40px;
            font-size: 14px;
            text-align: center;
          }
        }

        .card-btn {
          width: 100%;
          height: auto;

          margin-bottom: 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          button {
            width: 100%;
            height: 50px;

            outline: none;
            border: none;

            border-radius: 3px;

            font-size: 15px;
            font-weight: 600;

            transition: all 0.3s;

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
              opacity: 0.8;
              transform: scale(85%);
            }
          }
        }
      }

      .card-middle {
        margin-top: 50px;

        max-width: 350px;
        width: 100%;
        height: 530px;

        ${[sizes.up("lg")]} {
          width: 400px;
          height: 530px;
        }

        background: #090b13;
        border-radius: 20px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        box-shadow: #0e0f18 0px 0px 15px 5px;

        padding: 15px 25px;

        border: 2px solid #13151d;

        .card-top {
          .most {
            width: 120px;
            height: 20px;

            padding: 3px 10px;
            border-radius: 20px;

            position: relative;
            bottom: 25px;

            display: flex;
            align-items: center;
            justify-content: center;

            background-color: #fbab7e;
            background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
          }

          h1 {
            font-size: 20px;
          }

          h2 {
            width: 100%;
            margin-top: 20px;
            text-align: center;
            font-size: 28px;

            background-color: #fbab7e;
            background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p {
            margin-top: 40px;
            font-size: 14px;
            text-align: center;
          }
        }

        .card-btn {
          width: 100%;
          height: auto;

          margin-bottom: 5px;

          display: flex;
          align-items: center;
          justify-content: center;

          button {
            width: 100%;
            height: 50px;

            outline: none;
            border: none;

            border-radius: 3px;

            font-size: 15px;
            font-weight: 600;

            transition: all 0.3s;

            background-color: #fbab7e;
            background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);

            :hover {
              background-image: linear-gradient(
                62deg,
                #f7ce68 0%,
                #fbab7e 100%
              );
            }

            :active {
              opacity: 0.8;
              transform: scale(85%);
            }
          }
        }
      }
    }
  }
`;
