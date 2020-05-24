import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Slider from "react-slick";

const StyledImage = styled.img`
  width: 40%;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    width: 50%;
  }

  @media screen and (max-width: 750px) {
    width: 60%;
  }
`;

const IndexPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  const settings = {
    adaptiveHeight: true,
    adaptiveWidth: true,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true,
    className: "center",
    dots: false,
    fade: true,
    infinite: true,
    lazyLoad: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <Layout>
      <SEO title="Home" />
      <Slider {...settings}>
        {data.map((image, index) => {
          return (
            <div key={`${index}-cl`}>
              <StyledImage src={image.node.secure_url} />
            </div>
          );
        })}
      </Slider>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: { secure_url: { regex: "bclawrence/carousel/" } }
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
