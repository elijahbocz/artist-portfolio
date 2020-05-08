import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function SculpturePage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sculpture</title>
      </Helmet>
      <p>Sculpture</p>
    </Layout>
  );
}

export default SculpturePage;
