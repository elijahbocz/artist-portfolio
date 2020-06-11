import React from "react";
import { graphql } from "gatsby";
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import "../../../static/styles/masonry.css";
import "../../../static/styles/modal.css";
import Layout from "../../components/layout/layout";
import SEO from "../../components/seo";
import Sidebar from "./sidebar";

const FlexDiv = styled.div`
  display: flex;
`;

const SculpturePage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Sculpture" />
      <FlexDiv>
        <Sidebar />
        <div className="masonry">
          {data.map((image, index) => {
            return (
              <LazyLoad>
                <ModalImage
                  small={image.node.secure_url}
                  large={image.node.secure_url}
                  alt={image.node.context.custom.alt}
                  key={`${index}-cl`}
                  className="item"
                />
              </LazyLoad>
            );
          })}
        </div>
      </FlexDiv>
    </Layout>
  );
};

export default SculpturePage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "bclawrence/gallery/sculpture/" } }
    ) {
      edges {
        node {
          secure_url
          context {
            custom {
              alt
              caption
            }
          }
        }
      }
    }
  }
`;
