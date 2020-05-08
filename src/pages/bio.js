import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function BioPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bio</title>
      </Helmet>
      <p>Bio</p>
    </Layout>
  );
}

export default BioPage;