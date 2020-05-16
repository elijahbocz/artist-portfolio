import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const BioPage = props => {
  const html = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout>
      <SEO title="Bio" />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
