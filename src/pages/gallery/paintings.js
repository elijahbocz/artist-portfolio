import React from "react";
import { graphql } from "gatsby";
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazyload";

import "../../../static/styles/masonry.css";
import "../../../static/styles/modal.css";
import Layout from "../../components/layout/layout";
import SEO from "../../components/seo";
import Sidebar from "./sidebar";
import FlexDiv from "./gallery-div";

const PaintingsPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Paintings" />
      <FlexDiv>
        <Sidebar />
        <div className="masonry">
          {data.map((image, index) => {
            return (
              <LazyLoad>
                {image.node.context ? (
                  <ModalImage
                    small={image.node.secure_url}
                    large={image.node.secure_url}
                    alt={image.node.context.custom.alt}
                    key={`${index}-cl`}
                    className="item"
                  />
                ) : (
                  <ModalImage
                    small={image.node.secure_url}
                    large={image.node.secure_url}
                    alt="Painting"
                    key={`${index}-cl`}
                    className="item"
                  />
                )}
              </LazyLoad>
            );
          })}
        </div>
      </FlexDiv>
    </Layout>
  );
};

export default PaintingsPage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "artist-portfolio/gallery/paintings/" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
