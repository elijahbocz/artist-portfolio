import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 3rem;
  h1 {
    font-family: "EB Garamond", serif;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    padding: 3.2rem;
  }
  h1:hover {
    color: #adadad;
    cursor: pointer;
  }
  @media screen and (max-width: 1300px) {
    h1 {
      font-size: 3.75rem;
      padding: 2.25rem;
    }
  }
  @media screen and (max-width: 700px) {
    padding-bottom: 3rem;
    h1 {
      font-size: 2rem;
      padding-left: 7.5vw;
      margin: auto;
    }
  }
`;

const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin-right: 16px;
    margin-top: 0;
  }
  ul li {
    display: inline;
  }
  ul li a {
    color: #a50909;
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding: 0.9rem;
    text-decoration: none;
  }
  ul li a:hover {
    color: #adadad;
  }
  @media screen and (max-width: 1300px) {
    ul {
      padding-bottom: 0;
      padding-top: 1rem;
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      margin-right: 16px;
      margin-top: 0;
    }
    ul li a {
      font-size: 0.55rem;
      padding-right: 0.75rem;
      padding-left: 0;
    }
  }
`;
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1>
      <Link to="/">{siteTitle}</Link></h1>
      <StyledNav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/sculpture"}>Sculpture</Link>
          </li>
          <li>
            <Link to={"/painting"}>Painting</Link>
          </li>
          <li>
            <Link to={"/solo-work"}>Solo Work</Link>
          </li>
          <li>
            <Link to={"/bio"}>Bio</Link>
          </li>
          <li>
            <Link to={"/cv"}>CV</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </StyledNav>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
