import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <StyledHeader>
      <Link to="/">
        <img src="../assets/logo-fruit-02.svg" alt="logo" />
      </Link>
      <ul>
        <li className="hvr-underline-from-center">
          {" "}
          <NavLink
            exact
            to="/"
            activeStyle={{
              borderBottom: "2px solid #CEB9FF",
              paddingBottom: "4px",
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="hvr-underline-from-center">
          {" "}
          <NavLink
            exact
            to="/about"
            activeStyle={{
              borderBottom: "2px solid #CEB9FF",
              paddingBottom: "4px",
            }}
          >
            About
          </NavLink>{" "}
        </li>
        <li className="hvr-underline-from-center">
          {" "}
          <NavLink
            exact
            to="/Sellers"
            activeStyle={{
              borderBottom: "2px solid #CEB9FF",
              paddingBottom: "4px",
            }}
          >
            Sellers
          </NavLink>{" "}
        </li>
      </ul>
      <WrapperBurger>
        <MenuBurger
          style={{ fontSize: "30" }}
          onClick={(ev) => {
            ev.preventDefault();
            setOpen(!open);
          }}
        />
      </WrapperBurger>
      <MenuDropDown open={open}>
        <ul>
          <li className="hvr-underline-from-center">
            <NavLink
              exact
              to="/"
              activeStyle={{
                borderBottom: "2px solid #CEB9FF",
                paddingBottom: "4px",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="hvr-underline-from-center">
            <NavLink
              exact
              to="/about"
              activeStyle={{
                borderBottom: "2px solid #CEB9FF",
                paddingBottom: "4px",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li className="hvr-underline-from-center">
            <NavLink
              exact
              to="/Sellers"
              activeStyle={{
                borderBottom: "2px solid #CEB9FF",
                paddingBottom: "4px",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              Sellers
            </NavLink>
          </li>
        </ul>
      </MenuDropDown>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  @media (max-width: 500px) {
    padding: 0 20px;
  }

  li {
    display: inline;
    font-size: 1.5em;
    margin: 0 20px;
    padding-bottom: 6px;
  }
  img {
    width: 300px;
    margin: 30px 20px;
    @media (max-width: 500px) {
      width: 250px;
    }
  }
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    letter-spacing: 1px;
    @media (max-width: 750px) {
      display: none;
    }
  }

  .hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-from-center:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: var(--PrimaryColor);
    height: 2px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-from-center:hover:before,
  .hvr-underline-from-center:focus:before,
  .hvr-underline-from-center:active:before {
    left: 0;
    right: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const MenuBurger = styled(MenuIcon)`
  margin-top: 35px;
  display: none;
  color: black;
  cursor: pointer;
`;

const WrapperBurger = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: block;
  }
`;

const MenuDropDown = styled.div`
  display: none;
  ${(props) =>
    props.open
      ? `display : block; position: absolute; left: 0px; top: 80px; width : 100%; height: 100px; background-color: rgba(256, 256, 256, 1); z-index: 10; border-bottom: 1px solid lightgray;`
      : `display : none;`}
  ul {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    letter-spacing: 1px;
  }
`;

export default Header;
