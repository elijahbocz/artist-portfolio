import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <p>Contact</p>
    </Layout>
  );
}

export default ContactPage;
