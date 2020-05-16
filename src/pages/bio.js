import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const AppBio = styled.div`
  padding: 1rem 6rem;
  font-family: "Lato", sans-serif;
  @media screen and (max-width: 1600px) {
    .App-bio {
      padding: 1rem 0;
    }
  }
  @media screen and (max-width: 1300px) {
    .App-bio {
      padding: 1rem 3rem;
    }
  }
  @media screen and (max-width: 700px) {
    .App-bio {
      margin: 0;
      padding: 0;
    }
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
