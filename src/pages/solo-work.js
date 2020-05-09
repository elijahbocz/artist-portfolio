import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import MasonryGrid from "../components/layout/masonry";
import SEO from "../components/seo";

const ImageItem = styled.div``;

const SoloWorkPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Solo Work" />
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

export default SoloWorkPage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "bclawrence/solo-work/" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
