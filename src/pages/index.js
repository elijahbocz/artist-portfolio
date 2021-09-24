import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoad from "react-lazyload";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Slider from "react-slick";

const StyledImage = styled.img`
  width: 30%;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    width: 60%;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;

const IndexPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  const settings = {
    adaptiveHeight: true,
    adaptiveWidth: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
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
            <LazyLoad height={1000}>
              <div key={`${index}-cl`}>
                {image.node.context ? (
                  <StyledImage
                    src={image.node.secure_url}
                    alt={image.node.context.custom.alt}
                  />
                ) : (
                  <StyledImage src={image.node.secure_url} alt="Artwork" />
                )}
              </div>
            </LazyLoad>
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
      filter: { secure_url: { regex: "artist-portfolio/carousel/" } }
    ) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
