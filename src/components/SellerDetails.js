import React from "react";
import styled from "styled-components";
import { items, sellers } from "../data";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { Link } from "react-router-dom";

const SellerDetails = () => {
  const { sellerId } = useParams(); //alice
  let currentSeller = sellers[sellerId].id; //alice in the object

  // let sellerInventory = items[]
  // console.log(currentSeller)
  let arrItems = Object.values(items);
  let arrSeller = Object.values(sellers);
  console.log(arrSeller);
  return (
    <Wrapper>
      {arrSeller
        .filter((item) => item.id === sellerId)
        .map((item) => (
          <SellerBadge>
            <img src={item.avatarSrc} alt={item.id} />
            <p>{item.storeName}</p>
          </SellerBadge>
        ))}
      <Inventory>
        {arrItems
          .filter((item) => item.sellerId === currentSeller)
          .map((item) => (
            <div>
              <img src={item.imageSrc} />
              <h2>{item.name}</h2>
              <h3>{item.latinName}</h3>
              <p>{item.description}</p>
              <h4>Quantity left: {item.quantity}</h4>
              <Button price={item.price} />
            </div>
          ))}
      </Inventory>
      <OtherSellerWrapper>
        <MoreSellerTitle>Recommended sellers</MoreSellerTitle>
        <OtherSellerBadge>
          {arrSeller
            .filter((item) => item.id !== sellerId)
            .map((item) => (
              <div>
                <Link to={`/Sellers/${item.id}`}>
                  <img src={item.avatarSrc} alt={item.id} />
                </Link>
                <p>{item.storeName}</p>
              </div>
            ))}
        </OtherSellerBadge>
      </OtherSellerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const OtherSellerWrapper = styled.div`
  background-color: #fae8ff;
  padding-top: 60px;
  margin-top: 40px;
`;

const MoreSellerTitle = styled.h2`
  margin: 30px 30px 20px 60px;
  font-size: 1.2em;
  padding: 7px 15px;
  background-color: black;
  display: inline;
  font-weight: 400;
  color: white;
  border-radius: 8px;
`;

const OtherSellerBadge = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  margin: 60px;
  margin-bottom: 0px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
  /* display: flex;
  align-items: center; */

  div {
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    margin: 0 0 60px 0;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  p {
    font-size: 1.4em;
    margin-left: 20px;
  }
`;

const SellerBadge = styled.div`
  margin: 40px 20px 0 60px;
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  p {
    font-size: 2em;
    margin-left: 20px;
  }
`;
const Inventory = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px;
  margin: 60px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
  div {
    width: 100%;
    /* margin: 80px 0px 0px 80px; */
  }
  img {
    width: 100%;
    border-radius: 30px;
  }
  h2 {
    font-size: 2.5em;
    padding: 20px 0 10px 20px;
  }
  h3 {
    font-size: 1.5em;
    color: lightgray;
    font-weight: 200;
    padding: 0 0 10px 20px;
  }
  p {
    font-size: 1.5em;
    font-weight: 200;
    padding: 0 0 10px 20px;
  }
  h4 {
    font-size: 1.2em;
    padding-left: 20px;
  }
  Button {
    margin: 20px;
  }
`;

export default SellerDetails;
