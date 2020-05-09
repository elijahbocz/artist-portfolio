import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import { MasonryGrid } from "../components/layout/masonry";
import SEO from "../components/seo";

const ImageItem = styled.div``;

const SculpturePage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Sculpture" />
      <MasonryGrid>
        {data.map((image, index) => {
          return (
            <ImageItem key={`${index}-cl`}>
              <img src={image.node.secure_url} alt="tester" />
            </ImageItem>
          );
        })}
      </MasonryGrid>
    </Layout>
  );
};

export default SculpturePage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "bclawrence/sculpture/" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
