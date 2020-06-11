import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledDiv = styled.div`
  margin-left: 5rem;
  a {
    color: #a50909;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1rem;
    margin: 0.9rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .mobile-separator {
    display: none;
  }

  p {
    margin: 1rem;
  }

  @media screen and (max-width: 1300px) {
    margin-left: 2rem;
  }
  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-bottom: 2rem;
    padding: 1rem 0;
    text-align: center;

    a {
      font-size: 0.9rem;
      margin: 0.5rem;
    }

    .mobile-separator {
      display: block;
    }

    .desktop-separator {
      margin: 0;
      display: none;
    }
  }
`;

function Sidebar() {
  return (
    <StyledDiv>
      <Link to={"/gallery/paintings"} activeStyle={{ color: "#808080" }}>
        Paintings
      </Link>
      <p className="desktop-separator" />
      <Link to={"/gallery/portraiture"} activeStyle={{ color: "#808080" }}>
        Portraiture
      </Link>
      <p className="desktop-separator" />
      <Link to={"/gallery/sculpture"} activeStyle={{ color: "#808080" }}>
        Sculpture
      </Link>
      <p className="mobile-separator" />
      <p className="desktop-separator" />
      <Link to={"/gallery/drawings"} activeStyle={{ color: "#808080" }}>
        Drawings
      </Link>
      <p className="desktop-separator" />
      <Link to={"/gallery/solo-works"} activeStyle={{ color: "#808080" }}>
        Solo Works
      </Link>
    </StyledDiv>
  );
}

export default Sidebar;
