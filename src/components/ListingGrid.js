import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ListingGrid = ({ itemList }) => {
  return (
    <GalleryDiv>
      {itemList.map((item) => (
        <ItemGrid>
          <Link to={`/items/${item.id}`}>
            <img src={item.imageSrc} width="80%" />
            <h3> {item.name}</h3>
            <h4> {item.latinName}</h4>
          </Link>
        </ItemGrid>
      ))}
    </GalleryDiv>
  );
};

ListingGrid.propTypes = {
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      latinName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const GalleryDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  margin: 60px;
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, 1fr);
  }
`;

const ItemGrid = styled.div`
  /* padding: 40px 0 0 0; */
  border-radius: 25px;
  /* width: 26%; */
  /* margin: 20px 40px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    text-align: center;
    border-radius: 25px;
    width: 250px;
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
    @media (max-width: 640px) {
      width: 80%;
    }
    &:hover,
    &:focus,
    &:active {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
  h3 {
    font-size: 3em;
    margin: 0;
    padding: 15px 0;
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
`;

export default ListingGrid;
