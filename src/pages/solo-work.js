import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout/layout";

function SoloWorkPage() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Solo Work</title>
      </Helmet>
      <p>Solo work</p>
    </Layout>
  );
}

export default SoloWorkPage;