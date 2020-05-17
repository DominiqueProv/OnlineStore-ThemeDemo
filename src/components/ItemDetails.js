import React from "react";
import { items, sellers } from "../data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const ItemDetails = () => {
  const { itemId } = useParams();
  let currentItem = items[itemId];
  console.log(currentItem);
  let seller = sellers[currentItem.sellerId];
  console.log(seller);
  return (
    <DetailCard>
      <CardImgContainer>
        <img src={currentItem.imageSrc} alt={currentItem.name} />
      </CardImgContainer>
      <ProductDetail>
        <h2>{currentItem.name}</h2>
        <h3>{currentItem.latinName}</h3>
        <p>{currentItem.description}</p>
        <h4> Product of {currentItem.countryOfOrigin}</h4>
        <Button price={currentItem.price} />
        <Link to={`/Sellers/${seller.id}`}>
          <Sellers>
            <div>
              <img src={seller.avatarSrc} />
            </div>
            <div>
              <p>
                {" "}
                Sold by{" "}
                <span>
                  {seller.description}, by {seller.id}
                </span>
              </p>
            </div>
          </Sellers>
        </Link>
      </ProductDetail>
    </DetailCard>
  );
};

const DetailCard = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 400px);
  margin: 50px;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;
const CardImgContainer = styled.div`
  width: 350px;
  margin: 0 50px 0 0;
  img {
    width: 350px;
    border-radius: 30px;
  }
  @media (max-width: 750px) {
    width: 100%;
    margin: 0px;
    img {
      width: 80%;
      margin: 0 10%;
      margin-bottom: 50px;
      text-align: center;
    }
  }
`;

const ProductDetail = styled.div`
  width: 40%;
  h2 {
    font-size: 3.5em;
    margin: 0 0 10px 0;
  }
  h3 {
    font-size: 1.3em;
    color: grey;
    font-weight: 200;
  }
  p {
    font-size: 1.6em;
    font-weight: 200;
    padding: 20px 0;
  }
  h4 {
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: black;
  }
  @media (max-width: 750px) {
    width: 80%;
  }
`;

const Sellers = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  p {
    margin-left: 20px;

    span {
      font-weight: 400;
    }
  }
`;

export default ItemDetails;
