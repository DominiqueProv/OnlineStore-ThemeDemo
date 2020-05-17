import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <AboutWrapper>
        <TitreAbout>
          Fruit emporium is founded on a very simple principle: Fruit is good.
        </TitreAbout>
        <TextAbout>
          We carry the finest selection of produce from around the world, from
          tart citrus to sweet cherries. Our sellers are world-class, and your
          fruit is guaranteed to be worthy of auction in Asian markets.
        </TextAbout>
      </AboutWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  @media (max-width: 1000px) {
    min-height: calc(100vh + 100px);
  }
  @media (max-width: 700px) {
    min-height: auto;
  }
  /* min-height: calc(100vh + 100px); */
`;

const AboutWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("https://source.unsplash.com/Cr9hZrpC1Oc/1600x900");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 300px;
  @media (max-width: 1000px) {
    padding: 60px;
  }
  @media (max-width: 700px) {
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
const TitreAbout = styled.p`
  position: absolute;
  font-size: 5em;
  width: 400px;
  left: 100px;
  top: 310px;
  @media (max-width: 1000px) {
    padding-top: 250px;
    position: relative;
    font-size: 8vw;
    width: 100%;
    top: 0;
    left: 0;
    padding-bottom: 50px;
  }
`;

const TextAbout = styled.p`
  position: absolute;
  font-size: 1.3em;
  width: 400px;
  right: 100px;
  top: 550px;
  font-weight: 200;
  @media (max-width: 1000px) {
    position: relative;
    font-size: 3vw;
    top: 0;
    left: 0;
    width: 100%;
  }
  @media (max-width: 700px) {
  }
`;

export default About;
