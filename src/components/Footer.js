import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src="../assets/logo-fruit-02.svg" />
        <p>
          Tumblr poke you probably haven't heard of them, irony flannel pop-up
          DIY
        </p>
      </div>
      <ListWrapper>
        <ul>
          <li>Disrupt</li>
          <li>Pok pok</li>
          <li>Flannel 3</li>
        </ul>
      </ListWrapper>
      <ListWrapper>
        <ul>
          <li>Franzen</li>
          <li>Taxidermy </li>
          <li>Gochujang</li>
        </ul>
      </ListWrapper>
      <div>
        <Social>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
          <li>
            <i class="fab fa-facebook"></i>
          </li>
        </Social>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  background-image: url("../assets/dot-grid.png");
  padding: 40px;
  @media (max-width: 650px) {
    flex-direction: column;
  }
  p {
    font-size: 1.2em;
    font-weight: 200;
    color: black;
    padding: 20px 0 0 0;
    width: 200px;
    @media (max-width: 650px) {
      padding-bottom: 30px;
    }

    span {
      font-size: 2em;
    }
    ul {
      @media (max-width: 650px) {
        padding: 0px;
        margin: 0px;
      }
    }
  }
  li {
    list-style: none;
    padding: 5px;
    font-size: 1em;
    font-weight: 400;
    text-transform: uppercase;
    @media (max-width: 650px) {
      padding: 0px;
    }
  }
  img {
    width: 200px;
  }
`;

const Social = styled.ul`
  display: flex;
  justify-content: flex-start;
  font-size: 2em;
  @media (max-width: 650px) {
    padding: 0px;
  }
  li {
    padding: 20px;
    @media (max-width: 650px) {
      padding: 20px 20px 20px 0px;
    }
    .fa-twitter:hover {
      color: dodgerblue;
    }
    .fa-facebook:hover {
      color: blue;
    }
  }
`;

const ListWrapper = styled.div`
  ul {
    @media (max-width: 650px) {
      padding: 0px;
    }

    li {
      @media (max-width: 650px) {
        padding-bottom: 5px;
      }
    }
  }
`;

export default Footer;
