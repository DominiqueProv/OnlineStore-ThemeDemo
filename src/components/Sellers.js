import React from "react";
import styled from "styled-components";
import { sellers } from "../data";
import SellersList from "../components/SellerList";

const Sellers = () => {
  let listOfSeller = Object.values(sellers);
  return (
    <>
      <Title>List of sellers</Title>
      <SellerWrapper>
        {listOfSeller.map((seller) => (
          <SellersList seller={seller} />
        ))}
      </SellerWrapper>
      <Banner>
        <h2>
          {" "}
          I'm baby seitan tattooed marfa schlitz meggings shaman small batch
          flexitarian blog.
        </h2>
      </Banner>
    </>
  );
};

const SellerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 60px;
  @media (max-width: 650px) {
    margin-top: 0px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 1fr);
    margin-top: 20px;
  }
  @media (max-width: 420px) {
    margin: 0px;
  }
`;

const Banner = styled.div`
  width: 100vw;
  height: 600px;
  background-image: url("https://source.unsplash.com/random");
  background-size: cover;
  margin-top: 80px;
  position: relative;
  h2 {
    position: absolute;
    font-size: 5em;
    width: 500px;
    top: 40px;
    left: 80px;
    color: var(--PrimaryColor);
    @media (max-width: 600px) {
      font-size: 8vw;
      width: 80%;
      left: 30px;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 40px;
  font-size: 2em;
`;

export default Sellers;
