import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const StyledDiv = styled.div`
  display: flex;
  text-align: center;
  a {
    color: black;
    padding: 1rem;
    text-decoration: none;
  }
`;

function GalleryPage() {
  return (
    <Layout>
      <SEO>Title</SEO>
      <StyledDiv>
        <Link to={"/gallery/paintings"} activeStyle={{ color: "#808080" }}>
          Paintings
        </Link>
        <Link to={"/gallery/portraiture"} activeStyle={{ color: "#808080" }}>
          Portraiture
        </Link>
        <Link to={"/gallery/sculpture"} activeStyle={{ color: "#808080" }}>
          Sculpture
        </Link>
        <Link to={"/gallery/drawings"} activeStyle={{ color: "#808080" }}>
          Drawings
        </Link>
        <Link to={"/gallery/solo-works"} activeStyle={{ color: "#808080" }}>
          Solo Works
        </Link>
      </StyledDiv>
    </Layout>
  );
}

export default GalleryPage;
