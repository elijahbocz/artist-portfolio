import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function PaintingPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Painting</title>
      </Helmet>
      <p>Painting</p>
    </Layout>
  );
}

export default PaintingPage;
