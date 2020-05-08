import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const BioPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bio</title>
      </Helmet>
      <SEO title="Home" />
      <h1>{data.title}</h1>
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
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
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
