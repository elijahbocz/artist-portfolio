import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const AppBio = styled.div`
  font-family: "Lato", sans-serif;
  margin: 0 10rem;
  padding: 1rem 6rem;


  p {
    padding: 1rem;
  }
  @media screen and (max-width: 1600px) {
    padding: 1rem 0;
  }
  @media screen and (max-width: 1300px) {
    margin: 0 2rem;
    padding: 0 3rem;
  }
  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 0;
  }
`;

const BioPage = props => {
  const html = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout>
      <SEO title="Bio" />
      <AppBio dangerouslySetInnerHTML={{ __html: html }}></AppBio>
    </Layout>
  );
};

export default BioPage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "bio" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
