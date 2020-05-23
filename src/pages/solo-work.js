import React from "react";
import { graphql } from "gatsby";
import ModalImage from "react-modal-image";

import "../../static/styles/masonry.css";
import "../../static/styles/modal.css";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const SoloWorkPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Solo Work" />
      <div className="masonry">
        {data.map((image, index) => {
          return (
            <ModalImage
              small={image.node.secure_url}
              large={image.node.secure_url}
              alt={image.node.context.custom.alt}
              key={`${index}-cl`}
              className="item"
            />
          );
        })}
      </div>
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
