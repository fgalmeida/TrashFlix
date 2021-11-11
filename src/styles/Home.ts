import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: #090b13;

  .title {
    width: 100%;
    height: 850px;

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

    img {
      width: 300px;

      margin-bottom: 40px;
    }

    button {
      width: 400px;
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
  }

  .cards {
    width: 100%;
    height: 900px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .arrow {
      cursor: pointer;
      margin-top: 80px;
    }

    .title-cards {
      margin-top: 100px;
    }

    .cards-wrap {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 5rem;


      .card {
        margin-top: 50px;

        width: 350px;
        height: 450px;

        background: #090b13;
        border-radius: 20px;

        box-shadow: #0e0f18 0px 0px 15px 5px;

        padding: 15px 25px;

        border: 2px solid #13151d;

        h1 {
          font-size: 18px;
        }
      }

      .card-middle {
        margin-top: 50px;

        width: 400px;
        height: 530px;

        background: #090b13;
        border-radius: 20px;

        box-shadow: #0e0f18 0px 0px 15px 5px;

        padding: 15px 25px;

        border: 2px solid #13151d;

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

          background-image: radial-gradient(
            circle farthest-corner at 10% 20%,
            rgba(171, 102, 255, 1) 0%,
            rgba(116, 182, 247, 1) 90%
          );
        }

        h1 {
          font-size: 18px;
        }
      }
    }
  }
`;
