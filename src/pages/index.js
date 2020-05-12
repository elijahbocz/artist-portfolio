import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

// TODO:
// Limit 5(?) images and save src to md
// those five will be accessible for the admin
// parse md and assign to carousel

// OR: (easier less configurable)
// pull first five (by date) from Cloudinary/bclawrence/painting

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
