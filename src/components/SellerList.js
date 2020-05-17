import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SellersList = ({ seller }) => {
  return (
    <SellerGrid>
      <>
        <Link to={`/Sellers/${seller.id}`}>
          <img src={seller.avatarSrc} alt={seller.id} />
          <h2> {seller.id}</h2>
          <h3>{seller.storeName}</h3>
          <p>{seller.description}</p>
        </Link>
      </>
    </SellerGrid>
  );
};

const SellerGrid = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  /* justify-content: flex-start; */

  img {
    text-align: center;
    border-radius: 50%;
    /* width: 26% */
    width: 200px;
    height: 200px;
    margin: 40px 60px;
    /* vertical-align: middle; */
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    @media (max-width: 640px) {
      width: 275px;
      height: 275px;
      margin: 60px 0;
    }
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 2em;
  }

  h3 {
    font-size: 2em;
    margin: 0;
    padding: 15px 0;
    color: black;
    font-weight: 200;
  }
  h4 {
    font-size: 2em;
    font-weight: 200;
    color: lightgray;
    padding-bottom: 20px;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: black;
  }

  @media only screen and (max-width: 960px) {
    justify-content: flex-start;
  }
`;

SellerGrid.propTypes = {
  listOfSeller: PropTypes.arrayOf(
    PropTypes.shape({
      avatarSrc: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      avatarSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SellersList;
