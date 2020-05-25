import React from "react";
import { graphql } from "gatsby";
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazyload";

import "../../static/styles/masonry.css";
import "../../static/styles/modal.css";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const SculpturePage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Sculpture" />
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
