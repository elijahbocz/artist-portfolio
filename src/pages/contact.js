import React, { useState } from "react";
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

  .submit-btn {
    background-color: #000;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .submit-btn:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 760px) {
    input {
      width: 285px;
    }
  }
`;

const Separator = styled.p`
  margin: 1rem;
  padding: 0;
`;

const InfoDiv = styled.div`
  p {
    padding: 0.75rem;
  }
`;

const StatusMsg = styled.h3`
  color: #a50909;
`;

const ContactPage = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const html = props.data.allMarkdownRemark.edges[0].node.html;

  const encode = data => {
    const formData = new FormData();
    Object.keys(data).forEach(k => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message };

    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => setStatus("Message Sent!"))
      .catch(error =>
        setStatus("The message was not sent. Please try again...")
      );

    e.preventDefault();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "name") {
      return setName(value);
    }
    if (name === "email") {
      return setEmail(value);
    }
    if (name === "message") {
      return setMessage(value);
    }
  };

  return (
    <Layout>
      <SEO title="Contact" />
      <AppContactForm
        name="contact"
        method="post"
        action="/success"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <label>
          Your Name:
          <Separator />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <Separator />
        <label>
          Your Email:
          <Separator />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <Separator />
        <label>
          Your Message:
          <Separator />
          <textarea
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={handleChange}
          />
        </label>
        <Separator />
        <button type="submit" className="submit-btn">
          Send
        </button>
        <Separator />
        <StatusMsg>{status}</StatusMsg>
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
