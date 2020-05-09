import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  img:nth-child(5n) {
    grid-column-end: span 2;
  }
`;

const ImageItem = styled.div``;

const SculpturePage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Sculpture" />
      <ImageGrid>
        {data.map((image, index) => {
          return (
            <ImageItem key={`${index}-cl`}>
              <img src={image.node.secure_url} alt="tester" />
            </ImageItem>
          );
        })}
      </ImageGrid>
    </Layout>
  );
};

export default SculpturePage;

export const query = graphql`
  query {
    allCloudinaryMedia(filter: { secure_url: { regex: "bclawrence/sculpture/" } }) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
