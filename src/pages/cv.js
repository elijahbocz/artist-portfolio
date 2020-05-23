import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const AppCV = styled.div`
  align-items: center;
  box-shadow: inset 0 0 0 1px rgba(128, 128, 128, 0);
  display: flex;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  outline: none;
  padding-top: 17px;
  padding-bottom: 17px;
  position: relative;
  transition: box-shadow 0.2s ease-in-out;
  img {
    width: 35rem;
  }
  @media screen and (max-width: 700px) {
    .App-cv {
      display: flex;
      flex-direction: column;
      height: auto;
      margin: 0 auto;
      outline: none;
      padding-top: 17px;
      padding-bottom: 17px;
      position: absolute;
      transition: box-shadow 0.2s ease-in-out;
    }
    .App-cv img {
      width: 90%;
      padding-bottom: 3rem;
    }
  }
`;

const AppCVDetails = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  line-height: 1.7em;
  text-align: left;
  width: 557px;
  p {
    padding-bottom: 2rem;
  }
  a {
    text-decoration: none;
    color: #a50909;
  }
  @media screen and (max-width: 700px) {
    letter-spacing: 0px;
    line-height: 1.7em;
    text-align: left;
    width: 90%;
    p {
      padding-bottom: 2rem;
    }
  }
`;

const CVPage = props => {
  const data = props.data.allCloudinaryMedia.edges;
  const html = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout>
      <SEO title="CV" />
      <AppCV>
      {data.map((image, index) => {
          return (
            <img
              src={image.node.secure_url}
              alt="Exhibition"
              key={`${index}-cl`}
              className="item"
            />
          );
        })}
        <AppCVDetails dangerouslySetInnerHTML={{ __html: html }}></AppCVDetails>
      </AppCV>
    </Layout>
  );
};

export default CVPage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "cv" } } }) {
      edges {
        node {
          html
        }
      }
    }
    allCloudinaryMedia(filter: { secure_url: { regex: "bclawrence/cv/" } }) {
      edges {
        node {
          secure_url
        }
      }
    }
  }
`;
