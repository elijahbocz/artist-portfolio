import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 3rem;
  a {
    text-decoration: none;
  }

  h1 {
    color: black;
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
  a {
    color: #a50909;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    padding: 0.9rem;
    text-decoration: none;
  }
  a:hover {
    color: #adadad;
    cursor: pointer;
  }

  .linebreak {
    display: none;
  }
  @media screen and (max-width: 1300px) {
    a {
      padding-bottom: 0;
      padding-top: 1rem;
    }
  }
  @media screen and (max-width: 700px) {
    a {
      font-size: 0.75rem;
      margin-right: 1rem;
      padding: 0;
    }

    .linebreak {
      display: block;
    }
  }
`;
const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
    <StyledNav>
      <Link to={"/"}>Home</Link>
      <Link to={"/sculpture"}>Sculpture</Link>
      <Link to={"/painting"}>Painting</Link>
      <p className="linebreak"></p>
      <Link to={"/solo-work"}>Solo Work</Link>
      <Link to={"/bio"}>Bio</Link>
      <Link to={"/cv"}>CV</Link>
      <Link to={"/contact"}>Contact</Link>
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
