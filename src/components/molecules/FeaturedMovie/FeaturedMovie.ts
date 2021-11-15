import styled from "styled-components";
import { fadeEffect } from "styles/GlobalStyles";
import sizes from "utils/sizes";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .featured {
    width: 100%;
    height: 85%;
    font-family: "Raleway", sans-serif;

    background: rgba(9, 11, 19, 1);
    .featuredVertical {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to top,
        rgba(9, 11, 19, 1) 0%,
        transparent 90%
      );
      .featuredHorizontal {
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to right,
          rgba(9, 11, 19, 1) 20%,
          transparent 70%
        );
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5%;

        ${[sizes.up("md")]} {
          padding: 0 150px;
        }

        .featuredName {
          max-width: 1500px;

          font-size: 48px;
          font-weight: bold;
          color: white;

          display: flex;
          flex-direction: row;
          align-items: center;
          word-wrap: normal;
          .Rate {
            margin-left: 25px;
          }
        }
        .featuredInfo {
          font-size: 18px;
          font-weight: bold;
          margin-top: 15px;
          color: white;
          .featuredPoints,
          .featuredYear,
          .featuredSeasons {
            display: inline-block;
            margin-right: 15px;
          }
          .featuredPoints {
            color: #2196f3;
          }
        }
        .featuredDescription {
          margin-top: 15px;
          font-size: 20px;
          color: #999;
          max-width: 750px;
          padding-right: 33px;
        }
        .featuredButtons {
          margin-top: 15px;
          .featuredWatchbutton {
            display: inline-block;
            font-size: 20px;
            font-weight: bold;
            padding: 12px 25px;
            border-radius: 5px;
            text-decoration: none;
            margin-right: 10px;
            opacity: 1;
            transition: all ease 0.2s;

            background-image: radial-gradient(
              circle farthest-corner at 10% 20%,
              rgba(171, 102, 255, 1) 0%,
              rgba(116, 182, 247, 1) 90%
            );
            color: #fff;

            :hover {
              background-image: radial-gradient(
                circle farthest-corner at 10% 20%,
                rgba(116, 182, 247, 1) 0%,
                rgba(171, 102, 255, 1) 90%
              );
            }

            :active {
              transform: scale(90%);
            }
          }
        }
        .featuredGenres {
          strong {
            color: white;
          }
          margin-top: 15px;
          font-size: 18px;
          color: #999;
        }
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .featured {
      .featuredVertical {
        .featuredHorizontal {
          .featuredName {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            .Rate {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;
