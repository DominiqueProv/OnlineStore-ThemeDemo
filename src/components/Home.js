import React from "react";
import styled from "styled-components";
import { items } from "../data";
import ItemGrid from "../components/ListingGrid";

const Home = () => {
  return (
    <>
      <StyleHome>
        <h1>
          Fruit emporium sells the finest fruits from this world and beyond.
        </h1>
        <p>Browse items:</p>
        <div>
          <ItemGrid itemList={Object.values(items)} />
        </div>
      </StyleHome>
    </>
  );
};

export default Home;

const StyleHome = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    padding: 40px;
    font-size: 2em;
    text-align: center;
  }
  p {
    text-align: center;
    font-weight: 200;
    font-size: 1.2em;
    padding-bottom: 40px;
  }
  div {
    /* display: flex;
    flex-wrap: wrap;
    justify-content: center; */
    margin-bottom: 30px;
  }
`;
