import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const BioPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  return (
    <Layout>
      <SEO title="Bio" />
      <p>{data.firstParagraph}</p>
      <p>{data.secondParagraph}</p>
      <p>{data.thirdParagraph}</p>
      <p>{data.fourthParagraph}</p>
    </Layout>
  );
};

export default BioPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "bio" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              firstParagraph
              secondParagraph
              thirdParagraph
              fourthParagraph
            }
          }
        }
      }
    }
  }
`;
