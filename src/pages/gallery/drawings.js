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

const DrawingsPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  return (
    <Layout>
      <SEO title="Drawings" />
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
                    alt="Drawing"
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

export default DrawingsPage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "artist-portfolio/gallery/drawings/" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
