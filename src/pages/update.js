import React from "react";
import { graphql } from "gatsby";

const UpdatePage = props => {
  const html = props.data.allMarkdownRemark.edges[0].node.html;

  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default UpdatePage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "update" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
