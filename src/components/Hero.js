import React from "react";
import styled from "styled-components";
import bgImg from "../assets/bg.jpg";

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
  height: 100dvh;
  border: none;
  background-image: url(${bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(4px);

  @media screen and (max-width: ${breakpoints.md}) {
    background-position: top; /* เปลี่ยนตำแหน่งเมื่อหน้าจอเล็ก */
  }

  .box {
    flex-basis: 50%;
    height: 100%;
    background-color: hsl(0, 0%, 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    text-align: center;
    transition: background-color 0.3s ease;
  }
`;

const Hero = () => {
  return (
    <Container>
      <div></div>
    </Container>
  );
};

export default Hero;
