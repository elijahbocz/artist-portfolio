import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`;
