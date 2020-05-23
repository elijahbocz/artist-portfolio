import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const AppContactForm = styled.form`
  margin: 0 2rem;
  text-align: center;
  input {
    width: 300px;
  }
  textarea {
    height: 150px;
    width: 300px;
  }
`;

const Separator = styled.p`
  margin: 1rem;
  padding: 0;
`;

const InfoDiv = styled.div`
  p {
    padding: 0.5rem;
  }
`;

const ContactPage = props => {
  const html = props.data.allMarkdownRemark.edges[0].node.html;
  return (
    <Layout>
      <SEO title="Contact" />
      <AppContactForm
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <label>
          Your Name:
          <Separator />
          <input type="text" name="name" id="name" />
        </label>
        <Separator />
        <label>
          Your Email:
          <Separator />
          <input type="email" name="email" id="email" />
        </label>
        <Separator />
        <label>
          Your Message:
          <Separator />
          <textarea name="message" id="message" rows="5" />
        </label>
        <Separator />
        <button type="submit">Send</button>
        <Separator />
        <InfoDiv dangerouslySetInnerHTML={{ __html: html }}></InfoDiv>
      </AppContactForm>
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "contact" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
