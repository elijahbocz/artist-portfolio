import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledDiv = styled.div`
  // padding-left: 5rem;
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
  p {
    margin: 1rem;
  }
`;

function Sidebar() {
  return (
    <StyledDiv>
      <Link to={"/gallery/paintings"} activeStyle={{ color: "#808080" }}>
        Paintings
      </Link>
      <p />
      <Link to={"/gallery/portraiture"} activeStyle={{ color: "#808080" }}>
        Portraiture
      </Link>
      <p />
      <Link to={"/gallery/sculpture"} activeStyle={{ color: "#808080" }}>
        Sculpture
      </Link>
      <p />
      <Link to={"/gallery/drawings"} activeStyle={{ color: "#808080" }}>
        Drawings
      </Link>
      <p />
      <Link to={"/gallery/solo-works"} activeStyle={{ color: "#808080" }}>
        Solo Works
      </Link>
    </StyledDiv>
  );
}

export default Sidebar;
