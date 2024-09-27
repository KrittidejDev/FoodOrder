import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.jpg";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";

const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  border: none;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: repeat;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(13, 13, 13, 0.75);
    z-index: 1;
  }

  .Box {
    width: 90%;
    height: fit-content;
    padding: 20px;
    max-width: 1060px;
    margin-top: 50px;
    display: grid;
    justify-items: center;
    row-gap: 20px;
    column-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    z-index: 2;

    .Card {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 340px;
      height: 167px;

      border-radius: 20px;
      background: radial-gradient(
        90.16% 143.01% at 15.32% 21.04%,
        rgba(165, 239, 255, 0.2) 0%,
        rgba(110, 191, 244, 0.0447917) 77.08%,
        rgba(70, 144, 213, 0) 100%
      );
      border: 0.3px solid rgba(135, 38, 183, 0);
      border-image-source: radial-gradient(
          80.38% 222.5% at -13.75% -12.36%,
          #98f9ff 0%,
          rgba(255, 255, 255, 0) 100%
        )
        radial-gradient(
          80.69% 208.78% at 108.28% 112.58%,
          #eabfff 0%,
          rgba(135, 38, 183, 0) 100%
        );
      backdrop-filter: blur(26px);

      div {
        display: flex;
        flex-direction: column;
        width: 168px;
        height: 86px;
        gap: 8px;
        h2 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
        }
        p {
          font-size: 12px;
          color: #fff;
        }
      }
      button {
        position: absolute;
        right: 15px;
        bottom: 15px;
        width: 60px;
        height: 25px;
        padding: 4px 6px 4px 6px;
        margin-top: 10px;
        gap: 10px;
        border: none;
        border-radius: 5px;
        background: rgba(255, 67, 67, 1);
        color: #fff;
      }
    }
  }
`;

const Hero = () => {
  return (
    <Container>
      <div className="Box">
        <div className="Card">
          <img src={food1} alt="food1" />
          <div>
            <h2>Boiled Eggs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$10.00</button>
          </div>
        </div>

        <div className="Card">
          <img src={food2} alt="food2" />
          <div>
            <h2>RAMEN</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$25.00</button>
          </div>
        </div>

        <div className="Card">
          <img src={food3} alt="food3" />
          <div>
            <h2>GRILLED CHICKEN</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$45.00</button>
          </div>
        </div>

        <div className="Card">
          <img src={food2} alt="food4" />
          <div>
            <h2>CAKE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$18.00</button>
          </div>
        </div>

        <div className="Card">
          <img src={food5} alt="food5" />
          <div>
            <h2>BURGER</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$23.00</button>
          </div>
        </div>

        <div className="Card">
          <img src={food6} alt="food6" />
          <div>
            <h2>PANCAKE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Odio elementum in neque
              cras eget est.{" "}
            </p>
            <button>$25.00</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
